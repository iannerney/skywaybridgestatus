"use client";
import { Flex, Typography, Space, Alert, Spin, Button } from "antd";
const { Title, Text, Link } = Typography;
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    setInterval(() => setCurrentDateTime(new Date()), 1000);
    const isDataStale = currentDateTime.getTime() - fetchedDateTime.getTime() > 300000;
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleRefresh = async () => {
        setLoading(true);
        router.push(`/?refresh=${new Date().getTime()}`);
        router.refresh();
        setLoading(false);
    };
    return (
        <section id="primary-status">
            <Flex
                vertical={true}
                justify="center"
                gap="small"
                style={{ padding: "64px 0px", textAlign: "center", lineHeight: "1.5" }}
            >
                <Title level={1}>
                    The Sunshine Skyway Bridge is currently <br />{" "}
                    <span style={{ color: color, textTransform: "uppercase" }}>{status}</span>
                </Title>
                <Flex justify="center" gap="large" style={{ paddingTop: "48px" }}>
                    {!isDataStale ? (
                        <Text>🎉 You are viewing the latest status.</Text>
                    ) : (
                        <Spin spinning={loading}>
                            <Alert
                                type="info"
                                description="A new status is available."
                                action={
                                    <Space>
                                        <Button size="middle" type="primary" onClick={handleRefresh}>
                                            Refresh
                                        </Button>
                                    </Space>
                                }
                            />
                        </Spin>
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
