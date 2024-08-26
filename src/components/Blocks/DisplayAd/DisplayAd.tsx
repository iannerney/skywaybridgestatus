"use client";
import React from "react";
import { Container } from "..";
import { sendGAEvent } from "@next/third-parties/google";
import { Typography } from "antd";
const { Text } = Typography;

interface DisplayAdProps {
    adUrl: string;
    desktopImage: string;
    tabletImage: string;
    mobileImage: string;
    adAltText?: string;
    adId: string;
}

const DisplayAd: React.FC<DisplayAdProps> = ({ adId, adUrl, desktopImage, tabletImage, mobileImage, adAltText }) => {
    return (
        <section id={adId} className="ad-unit">
            <Container>
                <div style={{ textAlign: "center", paddingBottom: "12px" }}>
                    <Text style={{ textTransform: "uppercase", letterSpacing: "2px" }}>Advertisement</Text>
                </div>
                <a
                    href={adUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGAEvent({ event: "adClick", adId: adId })}
                >
                    <picture>
                        <source media="(max-width: 580px)" srcSet={mobileImage} style={{ width: "100%" }} />
                        <source media="(max-width: 768px)" srcSet={tabletImage} style={{ width: "100%" }} />
                        <img src={desktopImage} alt={adAltText ?? "Advertisement"} style={{ width: "100%" }} />
                    </picture>
                </a>
            </Container>
        </section>
    );
};

export default DisplayAd;
