"use client";
import { Flex, Typography, Button } from "antd";
const { Title, Text, Link } = Typography;
import Image from "next/image";

const SupportSection = () => {
    return (
        <section id="support">
            <Flex
                vertical={true}
                justify="center"
                gap="small"
                style={{ padding: "64px 24px", textAlign: "center", lineHeight: "1.5" }}
            >
                <Title level={2}>Was this helpful?</Title>
                <Text>
                    If so, please consider supporting this site by sharing with a friend, or by supporting my caffeine
                    addiction. 😝
                </Text>
                <Flex gap="small" justify="center" align="center">
                    <div
                        data-href="https://www.skywaybridgestatus.com"
                        data-layout="button_count"
                        data-action="like"
                        data-size="large"
                        data-show-faces="false"
                        data-share="true"
                    ></div>

                    <Button
                        icon={<Image src="/icons/BMC-btn-logo.svg" alt="" width={25} height={22} />}
                        href="https://www.buymeacoffee.com/iannerney"
                        target="_blank"
                        style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
                    >
                        Buy me a coffee
                    </Button>
                </Flex>
            </Flex>
        </section>
    );
};

export default SupportSection;
