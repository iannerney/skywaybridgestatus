"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "../Container/Container";
import { Typography } from "antd";
const { Text } = Typography;

const CruisePortAd: React.FC = () => {
    return (
        <Container id={"cruise-port-ad"}>
            <div style={{ textAlign: "center", paddingBottom: "12px" }}>
                <Text style={{ textTransform: "uppercase", letterSpacing: "2px" }}>Advertisement</Text>
            </div>
            <a
                href="https://www.suncoastwaterkeeper.org/stop_skyway_cruise_port_petition"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/ads/skyway-port.jpg"
                    alt="Stop the Skyway Cruise Port"
                    width={1092}
                    height={1092}
                    style={{ width: "100%", height: "auto" }}
                />
            </a>
        </Container>
    );
};

export default CruisePortAd;
