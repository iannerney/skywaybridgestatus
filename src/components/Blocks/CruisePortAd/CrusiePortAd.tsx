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
                <img src="/ads/skyway-port.jpg" alt="Stop the Skyway Cruise Port" style={{ width: "100%" }} />
            </a>
        </Container>
    );
};

export default CruisePortAd;
