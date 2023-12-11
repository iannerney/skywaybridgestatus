import { Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;

const ProjectInformation = () => {
    return (
        <section id="project-information">
            <Row gutter={[48, 48]}>
                <Col xs={24} md={14}>
                    <Title level={2}>About</Title>
                    <p>
                        SkywayBridgeStatus.com is a project aimed at helping Tampa Bay commuters plan for unexpected
                        closures of the Sunshine Skyway Bridge. This web application actively collects real-time weather
                        and traffic data from reputable sources. Our goal is to use this historical data to create a
                        closure prediction model available to the public.
                    </p>
                </Col>
                <Col xs={24} md={10}>
                    <Title level={2}>Sponsor This Project</Title>
                    <p>
                        If you’re interested in contributing to, or sponsoring this project, please visit our{" "}
                        <a href="https://github.com/iannerney/skywaybridgestatus">GitHub page</a>, email us at{" "}
                        <a href="mailto:contribute@skywaybridgestatus.com">contribute@skywaybridgestatus.com</a>, or
                        make a donation on my Buy Me a Coffee page.
                    </p>
                </Col>
            </Row>
        </section>
    );
};

export default ProjectInformation;
