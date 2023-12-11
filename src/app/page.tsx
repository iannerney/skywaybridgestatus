"use client";
import { PrimaryStatus, ProjectInformation, StatusDetails, SupportSection } from "@/components/Blocks";
import { PageLayout } from "@/components/Layouts";
import { Typography } from "antd";
const { Text } = Typography;

const Home = () => {
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
