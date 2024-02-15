import { PageLayout } from "@/components/Layouts";
import { PrimaryStatus, ProjectInformation, StatusDetails, SupportSection } from "@/components/Blocks";
import { branding } from "site.config";
import type { Metadata } from "next";

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

const Home = async () => {
    const data = await getData();
    const { primary_status, active_statements, planned_closures } = data;
    return (
        <PageLayout>
            <PrimaryStatus
                // status={primary_status.message}
                // color={primary_status.color}
                status="open"
                color="green"
                datetime={primary_status.datetime}
            />
            <StatusDetails activeStatements={active_statements} plannedClosures={planned_closures} />
            <SupportSection />
            <ProjectInformation />
        </PageLayout>
    );
};
export default Home;
