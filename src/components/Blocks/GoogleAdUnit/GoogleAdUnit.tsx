import React from "react";
import Container from "../Container/Container";
import Script from "next/script";

interface GoogleAdUnitProps {
    adName: string;
    adClient: string;
    adSlot: string;
    adFormat: string;
    isResponsive: boolean;
}

const GoogleAdUnit: React.FC<GoogleAdUnitProps> = ({ adName, adClient, adSlot, adFormat, isResponsive }) => {
    return (
        <Container id={adName}>
            <Script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
                crossOrigin="anonymous"
            ></Script>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={isResponsive.toString()}
            ></ins>
            <Script id={`${adClient}-script`}>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
        </Container>
    );
};

export default GoogleAdUnit;
