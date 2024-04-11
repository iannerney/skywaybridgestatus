"use client";
import { Typography, Table } from "antd";
import { Container, TrafficCameras } from "@/components/Blocks";
const { Title } = Typography;
import Link from "next/link";
import type { ColumnsType } from "antd/es/table";

// TODO: Refactor to use helper and types files
interface IStatusDetailsProps {
    activeStatements: IActiveStatements[] | null;
    plannedClosures: any[] | null;
}

interface IActiveStatements {
    id: React.Key;
    source: string;
    location: string;
    message: string;
    last_fetched: string;
}

const activeStatementsColumns: ColumnsType<IActiveStatements> = [
    {
        title: "Source",
        dataIndex: "source",
        key: "source",
        render: (text) => {
            if (text === "FHP") {
                return (
                    <Link
                        target="_blank"
                        href={`https://www.flhsmv.gov/fhp/traffic/live_traffic_feed.html`}
                        rel="nofollow"
                    >
                        {text}
                    </Link>
                );
            } else {
                return text;
            }
        },
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "location",
        responsive: ["md"],
    },
    {
        title: "Message",
        dataIndex: "message",
        key: "message",
    },
    {
        title: "Last Fetched",
        dataIndex: "last_fetched",
        key: "last_fetched",
        responsive: ["md"],
    },
];

const addKeyToObjectsInArray = (array: any[]) => {
    return array.map((item, index) => {
        return { ...item, key: index };
    });
};

const StatusDetails = ({ activeStatements, plannedClosures }: IStatusDetailsProps) => {
    return (
        <section
            id="status-details"
            style={{
                border: "2px solid #FFB600",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 182, 0, 0.15)",
            }}
        >
            <Container>
                {activeStatements && activeStatements.length > 0 && (
                    <>
                        <Title level={2}>Active Statements</Title>
                        <Table
                            dataSource={activeStatements}
                            columns={activeStatementsColumns}
                            pagination={false}
                            rowKey="id"
                        />
                    </>
                )}
                {/* 
            TODO: Implement planned closures feature
            {plannedClosures && plannedClosures.length > 0 ? <Title level={2}>Planned Closures</Title> : null} */}
                <Title level={2}>Weather</Title>
                <iframe
                    title="Windy.com Weather Map"
                    width="100%"
                    height="500"
                    src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=in&metricTemp=°F&metricWind=mph&zoom=10&overlay=wind&product=ecmwf&level=surface&lat=27.506&lon=-82.653&detailLat=27.615&detailLon=-82.654&detail=true" >
                </iframe>
                <TrafficCameras />
            </Container>
        </section>
    );
};

export default StatusDetails;
