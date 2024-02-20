"use client";
import React from "react";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";
import { Header, Footer, Container } from "../../Blocks";
import theme from "@/theme/themeConfig";
import type { IPageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
                <Header />
                <Container style={{ minHeight: "80vh" }}>{children}</Container>
                <Footer />
            </ConfigProvider>
        </StyledComponentsRegistry>
    );
};

export default PageLayout;
