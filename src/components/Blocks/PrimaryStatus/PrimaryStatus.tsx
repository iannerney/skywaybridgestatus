"use client";
import Link from "next/link";
import { Flex, Typography, Spin, Skeleton, Result, Button } from "antd";
const { Title, Text } = Typography;
import { useState, useEffect } from "react";
import { useStatus } from "@/hooks";
import { formatDate } from "@/utils";

const PrimaryStatus = () => {
    const { status, error, isLoading, isValidating, mutate } = useStatus();
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isDataStale, setIsDataStale] = useState(false);
    const [spinning, setSpinning] = useState(false);

    const handlePageRefresh = async () => {
        setSpinning(true);
        window.location.reload();
    };

    // update currentDateTime and isDataStale every second
    useEffect(() => {
        const interval = setInterval(() => {
            const fetchedDateTime = status?.primary_status?.datetime
                ? new Date(status.primary_status.datetime)
                : new Date();
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

    if (error) {
        return (
            <section id="primary-status">
                <Spin spinning={spinning} fullscreen />
                <Flex
                    vertical={true}
                    justify="center"
                    gap="small"
                    style={{ padding: "64px 0px", textAlign: "center", lineHeight: "1.5" }}
                >
                    <Result
                        status="500"
                        title={error?.response?.statusText || "Error"}
                        subTitle="Sorry, something went wrong."
                        extra={
                            <Button type="primary" key="console" onClick={handlePageRefresh}>
                                Try Again
                            </Button>
                        }
                    />
                </Flex>
            </section>
        );
    } else {
        return (
            <section id="primary-status">
                <Spin spinning={spinning} fullscreen />
                <Flex
                    vertical={true}
                    justify="center"
                    gap="small"
                    style={{ padding: "64px 0px", textAlign: "center", lineHeight: "1.5" }}
                >
                    <Title level={1} style={{ fontSize: "38px" }}>
                        The Sunshine Skyway Bridge is currently <br />{" "}
                        {!isLoading && !isValidating && status ? (
                            <span
                                style={{
                                    color: status.primary_status.color,
                                    textTransform: "uppercase",
                                    fontSize: "44px",
                                    lineHeight: "2",
                                }}
                            >
                                {status.primary_status.message}
                            </span>
                        ) : (
                            <Skeleton.Input
                                active={true}
                                size="large"
                                style={{ width: "200px", padding: 0, margin: 0 }}
                            />
                        )}
                    </Title>
                    <Flex justify="center" gap="large" style={{ paddingTop: "48px" }}>
                        {!isLoading && !isValidating && !!isDataStale ? (
                            <Text>
                                🆕 A new status is available.{" "}
                                <Link href="/" onClick={mutate}>
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

                    <Text style={{ fontSize: "0.75rem" }}>
                        {!isLoading && !isValidating && status
                            ? `Status last updated: ${formatDate(status.primary_status.datetime)}`
                            : " "}
                    </Text>
                </Flex>
            </section>
        );
    }
};

export default PrimaryStatus;
