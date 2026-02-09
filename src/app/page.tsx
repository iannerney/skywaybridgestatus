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
    CruisePortAd,
} from "@/components/Blocks";
import { branding } from "site.config";
import { statuses } from "@/consts/statuses";
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
    // If the primary status is not "closed" then we need to check the primary status against the FHP active statements
    if (data.primary_status.message !== "closed") {
        const statementsWithOpen = data.active_statements.filter(
            (statement) =>
                statement.message.toLowerCase().includes("bridge open") ||
                statement.message.toLowerCase().includes("bridge is open") ||
                statement.message.toLowerCase().includes("bridge reopened") ||
                statement.message.toLowerCase().includes("bridge re-opened"),
        );

        const statementsWithClosed = data.active_statements.filter(
            (statement) =>
                statement.message.toLowerCase().includes("bridge closed") ||
                statement.message.toLowerCase().includes("bridge is closed"),
        );

        if (statementsWithOpen.length > 0 && statementsWithClosed.length < 0) {
            // If both open and closed statements are found, override with mixed status
            return {
                ...statuses.mixed,
                datetime: statementsWithOpen[0].last_fetched,
            };
        } else if (statementsWithClosed.length > 0) {
            // If explicit "closed" statement is found, override with closed status
            // https://github.com/iannerney/skywaybridgestatus/issues/1
            return {
                ...statuses.closed,
                datetime: statementsWithClosed[0].last_fetched,
            };
        } else if (statementsWithOpen.length > 0) {
            // If explicit "open" or "reopened" statement is found, override with open status
            //https://github.com/iannerney/skywaybridgestatus/issues/3
            return {
                ...statuses.open,
                datetime: statementsWithOpen[0].last_fetched,
            };
        } else {
            return null;
        }
    }
};

const Home = async () => {
    const data = await getData();
    const primaryStatusOverride = await verifyPrimaryStatus(data);
    const { primary_status, active_statements, planned_closures } = data;
    const alertBanner = null; // TODO: Add this to the CMS or API

    return (
        <>
            {alertBanner && <Alert message={alertBanner} banner />}
            <PageLayout>
                <PrimaryStatus primaryStatus={primary_status} primaryStatusOverride={primaryStatusOverride} />
                <StatusDetails activeStatements={active_statements} plannedClosures={planned_closures} />
                {/* TODO: Make a forecast component that reads from the DB */}
                {/* <Forecast
                    title="🌀 Hurricane Milton Forecast"
                    description="Based on the current wind forecast, I suspect the bridge may close sometime around 5pm on Wedensday, and then re-open again Thursday evening. The bridge is known to close when sustained winds exceed 40mph, then re-open when FHP determines the bridge is safe to use. Please check back here for the current bridge status and please stay safe! -Ian"
                    updated="Wednesday, October 9 at 7:45am"
                /> */}
                {/* <GoogleAdUnit
                    adName="sbs__horizontal-ad--1"
                    adClient="ca-pub-8789676310669251"
                    adSlot="9287289192"
                    adFormat="auto"
                    isResponsive={true}
                /> */}
                <CruisePortAd />
                <Weather />
                <GoogleAdUnit
                    adName="sbs__horizontal-ad--2"
                    adClient="ca-pub-8789676310669251"
                    adSlot="3678112559"
                    adFormat="auto"
                    isResponsive={true}
                />
                <SupportSection />
                <ProjectInformation />
            </PageLayout>
        </>
    );
};
export default Home;
