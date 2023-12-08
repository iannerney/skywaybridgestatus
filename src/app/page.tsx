"use client";
import { PrimaryStatus } from "@/components/Blocks";
import { PageLayout } from "@/components/Layouts";
import { ConfigProvider, Typography } from "antd";
import theme from "@/theme/themeConfig";
const { Text } = Typography;

const Home = () => {
    return (
        <ConfigProvider theme={theme}>
            <PageLayout>
                <PrimaryStatus />
            </PageLayout>
        </ConfigProvider>
    );
};

export default Home;
