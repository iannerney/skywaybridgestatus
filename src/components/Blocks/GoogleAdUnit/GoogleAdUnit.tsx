"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../Container/Container";
import { Typography } from "antd";
const { Text } = Typography;

interface GoogleAdUnitProps {
    adName: string;
    adClient: string;
    adSlot: string;
    adFormat: string;
    isResponsive: boolean;
}

const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({ adName, adClient, adSlot, adFormat, isResponsive }) => {
    const [adLoaded, setAdLoaded] = useState<boolean>(false);
    useEffect(() => {
        try {
            if (window.hasOwnProperty("adsbygoogle")) {
                // @ts-ignore
                (adsbygoogle = window.adsbygoogle || []).push({});
                setAdLoaded(true);
            }
        } catch (e) {
            console.error("Could not initialize adsense ad block", e);
        }
    }, []);

    const labelDisplay = adLoaded === true ? "block" : "none";

    return (
        <Container id={adName}>
            <div style={{ textAlign: "center", paddingBottom: "12px", display: labelDisplay }}>
                <Text style={{ textTransform: "uppercase", letterSpacing: "2px" }}>Advertisement</Text>
            </div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={isResponsive.toString()}
            ></ins>
        </Container>
    );
};

export default GoogleAdUnit;
