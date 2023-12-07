"use client";
import Image from "next/image";
import { Typography, Flex } from "antd";
const { Text, Link } = Typography;
import { Footer as AntdFooter } from "antd/es/layout/layout";
import { FacebookFilled, GithubFilled } from "@ant-design/icons";
import { branding } from "site.config";

const Footer = () => {
    const date = new Date();
    return (
        <AntdFooter className="footer">
            <div className="copyright" style={{ display: "grid", placeItems: "center" }}>
                <Text>
                    SkywayBridgeStatus.com &copy; 2017-{date.getFullYear()}{" "}
                    <Link href="https://www.iannerney.com">Ian Nerney</Link>
                </Text>
                <Text>
                    By using this web site you agree to the <Link href="/terms-of-use">terms of use</Link>.
                </Text>
                <Flex justify="center" style={{ padding: "0 8px" }}>
                    <Link href="https://www.facebook.com/SkywayStatus/">
                        <FacebookFilled />
                    </Link>
                    <Link href="https://github.com/iannerney/skywaybridgestatus">
                        <GithubFilled />
                    </Link>
                </Flex>
            </div>
        </AntdFooter>
    );
};

export default Footer;
