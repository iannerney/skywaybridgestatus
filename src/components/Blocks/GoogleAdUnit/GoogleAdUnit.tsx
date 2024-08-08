"use client";
import React, { useEffect } from "react";
import Container from "../Container/Container";

interface GoogleAdUnitProps {
    adName: string;
    adClient: string;
    adSlot: string;
    adFormat: string;
    isResponsive: boolean;
}

const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({ adName, adClient, adSlot, adFormat, isResponsive }) => {
    useEffect(() => {
        let adsbygoogle: any;
        try {
            if (adsbygoogle && !adsbygoogle.loaded) {
                (adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container id={adName}>
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
