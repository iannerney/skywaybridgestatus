import { PageLayout } from "@/components/Layouts";
import {
    PrimaryStatus,
    ProjectInformation,
    StatusDetails,
    SupportSection,
    Weather,
    TrafficCameras,
    GoogleAdUnit,
    Forecast,
} from "@/components/Blocks";
import { branding } from "site.config";
import { Alert } from "antd";
import type { Metadata } from "next";
import type { IStatusSummary } from "@/types/StatusTypes";

export const metadata: Metadata = {
    title: `${branding.siteName} - ${branding.siteTagline}`,
    description: branding.siteDescription,
};

async function getData() {
    const res = await fetch(`https://api.skywaybridgestatus.com/v1/status/?key=${process.env.SBS_API_KEY}`, {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const verifyPrimaryStatus = async (data: IStatusSummary) => {
    // If the primary status is not "closed" then we need to check the active statements for a closure
    // Reference https://github.com/iannerney/skywaybridgestatus/issues/1
    if (data.primary_status.message !== "closed") {
        const activeClosures = data.active_statements.filter((statement) =>
            statement.message.toLowerCase().includes("closed")
        );
        if (activeClosures.length > 0) {
            const primaryStatusOverride = {
                message: "closed",
                modifier: "closed",
                color: "red",
                datetime: activeClosures[0].last_fetched,
            };
            return primaryStatusOverride;
        } else {
            return null;
        }
    }
};

const Home = async () => {
    const data = await getData();
    // TEMPORARY FIX - TODO: FIX THIS
    // const primaryStatusOverride = await verifyPrimaryStatus(data);
    const { primary_status, active_statements, planned_closures } = data;
    const alertBanner = null; // TODO: Add this to the CMS or API

    return (
        <>
            {alertBanner && <Alert message={alertBanner} banner />}
            <PageLayout>
                <PrimaryStatus primaryStatus={primary_status} primaryStatusOverride={data.primary_status} />
                <StatusDetails activeStatements={active_statements} plannedClosures={planned_closures} />
                {/* TODO: Make a forecast component that reads from the DB */}
                <Forecast
                    title="🌀 Hurricane Milton Forecast"
                    description="Based on the current wind forecast, I suspect the bridge may close sometime around noon on Wedensday, and then open again mid-day Thursday (assuming no damage or cleanup is required). The bridge is known to close when sustained winds exceed 40mph, then re-open when FHP determines the bridge is safe. Please check back here for the current bridge status and stay safe! -Ian"
                    updated="Monday, October 7 at 10:30am"
                />
                <GoogleAdUnit
                    adName="sbs__horizontal-ad--1"
                    adClient="ca-pub-8789676310669251"
                    adSlot="9287289192"
                    adFormat="auto"
                    isResponsive={true}
                />
                <Weather />
                <GoogleAdUnit
                    adName="sbs__horizontal-ad--2"
                    adClient="ca-pub-8789676310669251"
                    adSlot="3678112559"
                    adFormat="auto"
                    isResponsive={true}
                />
                <TrafficCameras />
                <SupportSection />
                <ProjectInformation />
            </PageLayout>
        </>
    );
};
export default Home;
