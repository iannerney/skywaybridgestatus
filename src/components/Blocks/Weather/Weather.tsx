"use client";
import { Typography } from "antd";
import { Container } from "@/components/Blocks";
const { Title } = Typography;

const Weather = () => {
    return (
        <section
            id="weather"
            style={{
                border: "2px solid #91caff",
                borderRadius: "5px",
                backgroundColor: "#e6f4ff",
            }}
        >
            <Container>
                <Title level={2}>Weather</Title>
                <iframe
                    title="Windy.com Weather Map"
                    width="100%"
                    height="500"
                    src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=in&metricTemp=°F&metricWind=mph&zoom=10&overlay=wind&product=ecmwf&level=surface&lat=27.506&lon=-82.653&detailLat=27.615&detailLon=-82.654&detail=true"
                ></iframe>
            </Container>
        </section>
    );
};

export default Weather;
