"use client";
import React from "react";
import { Typography } from "antd";
import { Container } from "@/components/Blocks";
const { Title, Paragraph } = Typography;

interface ForecastProps {
    title: string;
    updated?: string;
    description?: string;
    children?: React.ReactNode;
}

const Forecast: React.FC<ForecastProps> = ({ title, updated, description, children }) => {
    // Implement the Forecast component logic here

    return (
        <section
            id="forecast"
            style={{
                border: "2px solid #91caff",
                borderRadius: "5px",
                backgroundColor: "#e6f4ff",
            }}
        >
            <Container>
                <Title level={2}>{title}</Title>
                {updated && (
                    <Paragraph style={{ fontSize: "14px", fontStyle: "italic" }}>Last updated: {updated}</Paragraph>
                )}
                {description && <Paragraph>{description}</Paragraph>}
                {children}
            </Container>
        </section>
    );
};

export default Forecast;
