"use client";
import React from "react";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, Alert } from "antd";
import { Header, Footer, Container } from "../../Blocks";
import theme from "@/theme/themeConfig";
import type { IPageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
                <Alert
                    message={`We have received feedback that FL511 is showing an incorrect "closed" status. We have manually updated our status to "open" and we are working to address this issue. Thank you for your patience. `}
                    banner
                />
                <Header />
                <Container style={{ minHeight: "80vh" }}>{children}</Container>
                <Footer />
            </ConfigProvider>
        </StyledComponentsRegistry>
    );
};

export default PageLayout;
