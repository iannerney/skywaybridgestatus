import { Flex, Typography } from "antd";
const { Title, Text, Link } = Typography;

const PrimaryStatus = () => {
    return (
        <section id="primary-status">
            <Flex
                vertical={true}
                justify="center"
                gap="small"
                style={{ padding: "64px 0", textAlign: "center", lineHeight: "1.5" }}
            >
                <Title level={1}>
                    The Sunshine Skyway Bridge is currently <br /> <span style={{ color: "green" }}>OPEN</span>
                </Title>
                <Text>
                    <Link href="https://www.skywaybridgestatus.com/&refresh=true">Refresh this page</Link> for the
                    latest data.
                </Text>
                <Text>
                    We update our main status every 5 minutes from{" "}
                    <Link href="https://fl511.com/List/Alerts">FL511</Link>.
                </Text>
                <Text style={{ fontSize: "0.75rem" }}>(Status last updated: November 17th, 2023 at 3:50pm)</Text>
            </Flex>
        </section>
    );
};

export default PrimaryStatus;
