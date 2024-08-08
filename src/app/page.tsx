import { PageLayout } from "@/components/Layouts";
import {
    PrimaryStatus,
    ProjectInformation,
    StatusDetails,
    SupportSection,
    DisplayAd,
    Weather,
    TrafficCameras,
    GoogleAdUnit,
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
    const primaryStatusOverride = await verifyPrimaryStatus(data);
    const { primary_status, active_statements, planned_closures } = data;
    const alertBanner = null; // TODO: Add this to the CMS or API
    return (
        <>
            {alertBanner && <Alert message={alertBanner} banner />}
            <PageLayout>
                <PrimaryStatus primaryStatus={primary_status} primaryStatusOverride={primaryStatusOverride} />
                <StatusDetails activeStatements={active_statements} plannedClosures={planned_closures} />
                <GoogleAdUnit
                    adName="sbs__horizontal-ad--1"
                    adClient="ca-pub-8789676310669251"
                    adSlot="9287289192"
                    adFormat="auto"
                    isResponsive={true}
                />
                <Weather />
                <DisplayAd
                    desktopImage="/ads/placeholder-1088x300.png"
                    tabletImage="/ads/placeholder-768x400.png"
                    mobileImage="/ads/placeholder-580x400.png"
                    adUrl="mailto:ian@skywaybridgestatus.com"
                    adAltText="To advertise here contact ian@skywaybridgestatus.com"
                    adId="ad1-placement2"
                />
                <TrafficCameras />
                <SupportSection />
                <ProjectInformation />
            </PageLayout>
        </>
    );
};
export default Home;
