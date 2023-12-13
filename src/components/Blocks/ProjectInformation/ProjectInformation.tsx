"use client";
import { Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;

const ProjectInformation = () => {
    return (
        <section id="project-information">
            <Row gutter={[48, 48]}>
                <Col xs={24} md={16}>
                    <Title level={2}>About</Title>
                    <Text>
                        SkywayBridgeStatus.com is a project aimed at helping Tampa Bay commuters plan for unexpected
                        closures of the Sunshine Skyway Bridge. This web application actively collects real-time weather
                        and traffic data from reputable sources. Our goal is to use this historical data to create a
                        closure prediction model available to the public.
                    </Text>
                </Col>
                <Col xs={24} md={8}>
                    <Title level={2}>Sponsor This Project</Title>
                    <Text>
                        If you’re interested in contributing to, or sponsoring this project, please visit our{" "}
                        <a href="https://github.com/iannerney/skywaybridgestatus">GitHub page</a>,{" "}
                        <a href="mailto:contribute@skywaybridgestatus.com">email us</a>, or{" "}
                        <a href="https://www.buymeacoffee.com/iannerney">make a donation</a> to help keep our web
                        servers running.
                    </Text>
                </Col>
            </Row>
        </section>
    );
};

export default ProjectInformation;
