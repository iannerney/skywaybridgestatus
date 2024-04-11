"use client";
import React, { use } from "react";
import { Typography, Flex, Row, Col, Image } from "antd";
const { Title } = Typography;
import { trafficCameras } from "./TrafficCameras.data";
import { Container } from "..";

const TrafficCameras = () => {
    return (
        <section
            id="traffic-cameras"
            style={{
                border: "2px solid #FFB600",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 182, 0, 0.15)",
            }}
        >
            <Container>
                <Title level={2}>Traffic Cameras</Title>
                <Row gutter={[16, 16]}>
                    {trafficCameras.map((camera) => {
                        return (
                            <Col key={camera.description} xs={{ span: 12 }} md={{ span: 8 }}>
                                <figure style={{ margin: "0", paddingBottom: "16px", maxWidth: "100%" }}>
                                    <Image src={camera.url} alt={camera.description} />
                                    <figcaption>{camera.description}</figcaption>
                                </figure>
                            </Col>
                        );
                    })}
                </Row>
                <Typography>
                    More cameras can be found here:{" "}
                    <a href="https://fl511.com/Map/EmbeddedMap" rel="nofollow">
                        https://fl511.com/Map/EmbeddedMap
                    </a>
                </Typography>
            </Container>
        </section>
    );
};

export default TrafficCameras;
