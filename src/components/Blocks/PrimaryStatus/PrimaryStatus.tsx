"use client";
import { Flex, Typography, Space, Alert, Spin, Button } from "antd";
const { Title, Text } = Typography;
import Link from "next/link";
import { useState, useEffect } from "react";

interface IPrimaryStatusProps {
    status: string;
    color: string;
    datetime: string;
}

const PrimaryStatus = ({ status, color, datetime }: IPrimaryStatusProps) => {
    const fetchedDateTime = new Date(datetime);
    const formattedDateTime = fetchedDateTime.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isDataStale, setIsDataStale] = useState(false);
    // update currentDateTime and isDataStale every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
            const timeDiff = Math.abs(currentDateTime.getTime() - fetchedDateTime.getTime());
            const diffMinutes = Math.ceil(timeDiff / (1000 * 60));
            if (diffMinutes > 5) {
                setIsDataStale(true);
            } else {
                setIsDataStale(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [currentDateTime]);

    const [spinning, setSpinning] = useState(false);
    const handleRefresh = async () => {
        setSpinning(true);
        window.location.reload();
    };
    return (
        <section id="primary-status">
            <Spin spinning={spinning} fullscreen />
            <Flex vertical={true} justify="center" gap="small" style={{ textAlign: "center", lineHeight: "1.5" }}>
                <Title level={1}>
                    The Sunshine Skyway Bridge is currently <br />{" "}
                    <span style={{ color: "red", textTransform: "uppercase" }}>Closed</span>
                </Title>
                <Flex justify="center" gap="large" style={{ paddingTop: "48px" }}>
                    {!!isDataStale ? (
                        <Text>
                            🆕 A new status is available.{" "}
                            <Link href="/" onClick={handleRefresh}>
                                Refresh the page
                            </Link>
                            .
                        </Text>
                    ) : (
                        <Text>🎉 You are viewing the latest status.</Text>
                    )}
                </Flex>
                <Text>
                    We update our main status every 5 minutes from{" "}
                    <Link target="_blank" href="https://fl511.com/List/Alerts" rel="nofollow">
                        FL511
                    </Link>
                    .
                </Text>

                <Text style={{ fontSize: "0.75rem" }}>(Status last updated: {formattedDateTime})</Text>
            </Flex>
        </section>
    );
};

export default PrimaryStatus;
