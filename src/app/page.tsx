"use client";
import { PrimaryStatus } from "@/components/Blocks";
import { PageLayout } from "@/components/Layouts";
import { Typography } from "antd";
const { Text } = Typography;

const Home = () => {
    return (
        <PageLayout>
            <PrimaryStatus />
        </PageLayout>
    );
};

export default Home;
