import { Flex, Typography } from "antd";
const { Title, Text, Link } = Typography;

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
    return (
        <section id="primary-status">
            <Flex
                vertical={true}
                justify="center"
                gap="small"
                style={{ padding: "64px 0", textAlign: "center", lineHeight: "1.5" }}
            >
                <Title level={1}>
                    The Sunshine Skyway Bridge is currently <br />{" "}
                    <span style={{ color: color, textTransform: "uppercase" }}>{status}</span>
                </Title>
                <Text>
                    We update our main status every 5 minutes from{" "}
                    <Link href="https://fl511.com/List/Alerts">FL511</Link>.
                </Text>

                <Text>
                    <Link href={`/?refresh=${Date.now()}`}>Refresh this page</Link> for the latest data.
                </Text>

                <Text style={{ fontSize: "0.75rem" }}>(Status last updated: {formattedDateTime})</Text>
            </Flex>
        </section>
    );
};

export default PrimaryStatus;
