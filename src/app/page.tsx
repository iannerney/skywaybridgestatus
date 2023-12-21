import { PageLayout } from "@/components/Layouts";
import { PrimaryStatus, ProjectInformation, StatusDetails, SupportSection } from "@/components/Blocks";
import { branding } from "site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `${branding.siteName} - ${branding.siteTagline}`,
    description: branding.siteDescription,
};

const Home = async () => {
    return (
        <PageLayout>
            <PrimaryStatus />
            <StatusDetails />
            <SupportSection />
            <ProjectInformation />
        </PageLayout>
    );
};
export default Home;
