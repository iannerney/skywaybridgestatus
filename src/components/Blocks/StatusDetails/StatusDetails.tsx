"use client";
import { Typography, Table } from "antd";
const { Title } = Typography;
import type { ColumnsType } from "antd/es/table";

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
    // activeStatements = [
    //     { source: "FHP", location: "PINELLAS", message: "NO ROADBLOCK", last_fetched: "2023-12-12 15:45:02" },
    // ];

    const plannedClosuresWithKeys = plannedClosures ? addKeyToObjectsInArray(plannedClosures) : null;

    return (
        <section
            id="status-details"
            style={{
                border: "2px solid #FFB600",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 182, 0, 0.15)",
            }}
        >
            <Title level={2}>Current Status</Title>
            {activeStatements && activeStatements.length > 0 && (
                <>
                    <Title level={3}>Active Statements</Title>
                    <Table
                        dataSource={activeStatements}
                        columns={activeStatementsColumns}
                        pagination={false}
                        rowKey="id"
                    />
                </>
            )}
            {plannedClosures && plannedClosures.length > 0 ? <Title level={3}>Planned Closures</Title> : null}
            <Title level={3}>Weather</Title>
            <iframe
                width="100%"
                height="400"
                src="https://embed.windy.com/embed2.html?lat=27.613&lon=-82.652&detailLat=26.554&detailLon=-81.902&width=1036&height=400&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1"
            ></iframe>
        </section>
    );
};

export default StatusDetails;
