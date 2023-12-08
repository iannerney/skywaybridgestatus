"use client";
import React from "react";
import { Layout as AntdLayout } from "antd";
const { Content } = AntdLayout;
import { Header, Footer } from "../../Blocks";
import type { IPageLayoutProps } from "./PageLayout.types";

const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <AntdLayout>
            <Header />
            <Content style={{ minHeight: "80vh" }}>{children}</Content>
            <Footer />
        </AntdLayout>
    );
};

export default PageLayout;
