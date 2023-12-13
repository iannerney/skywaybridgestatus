"use client";
import { Typography } from "antd";
const { Text } = Typography;
import Link from "next/link";
import { Footer as AntdFooter } from "antd/es/layout/layout";

const Footer = () => {
    const date = new Date();
    return (
        <AntdFooter className="footer" style={{ margin: "48px" }}>
            <div className="copyright" style={{ display: "grid", placeItems: "center" }}>
                <Text>
                    SkywayBridgeStatus.com &copy; 2017-{date.getFullYear()}{" "}
                    <Link href="https://www.iannerney.com" target="_blank">
                        Ian Nerney
                    </Link>
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
