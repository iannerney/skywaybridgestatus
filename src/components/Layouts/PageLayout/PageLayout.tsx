"use client";
import React from "react";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, Layout as AntdLayout } from "antd";
const { Content } = AntdLayout;
import { Header, Footer } from "../../Blocks";
import theme from "@/theme/themeConfig";
import type { IPageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
                <AntdLayout>
                    <Header />
                    <Content style={{ minHeight: "80vh", margin: "auto 24px" }}>{children}</Content>
                    <Footer />
                </AntdLayout>
            </ConfigProvider>
        </StyledComponentsRegistry>
    );
};

export default PageLayout;
