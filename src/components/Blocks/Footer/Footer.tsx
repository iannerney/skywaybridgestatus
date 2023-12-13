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
        <AntdFooter className="footer" style={{ margin: "48px" }}>
            <div className="copyright" style={{ display: "grid", placeItems: "center" }}>
                <Text>
                    SkywayBridgeStatus.com &copy; 2017-{date.getFullYear()}{" "}
                    <Link href="https://www.iannerney.com">Ian Nerney</Link>
                </Text>
                <Text style={{ fontSize: "0.75rem", padding: "8px 0" }}>
                    By using this web site you agree to the{" "}
                    <Link href="/terms-of-use" style={{ fontSize: "0.75rem" }}>
                        terms of use
                    </Link>
                    .
                </Text>
            </div>
        </AntdFooter>
    );
};

export default Footer;
