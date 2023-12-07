"use client";
import React from "react";
import { ConfigProvider, Layout as AntdLayout } from "antd";
const { Content } = AntdLayout;
import { Header, Footer } from "../../Blocks";
import theme from "@/theme/themeConfig";
import type { IPageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <ConfigProvider theme={theme}>
            <AntdLayout>
                <Header />
                <Content style={{ minHeight: "80vh" }}>{children}</Content>
                <Footer />
            </AntdLayout>
        </ConfigProvider>
    );
};

export default PageLayout;
