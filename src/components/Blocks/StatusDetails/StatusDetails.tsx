import { Flex, Typography } from "antd";
const { Title, Text, Link } = Typography;

const StatusDetails = () => {
    const activeStatements = [{ something: "something" }];
    const plannedClosures = [{ something: "something" }];
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
            {activeStatements && activeStatements.length > 0 ? <Title level={3}>Active Statements</Title> : null}
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
