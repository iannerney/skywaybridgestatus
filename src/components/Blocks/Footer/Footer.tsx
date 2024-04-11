"use client";
import { Typography } from "antd";
const { Paragraph } = Typography;
import Link from "next/link";
import { Container } from "@/components/Blocks";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="footer">
            <Container style={{ textAlign: "center" }}>
                <Paragraph>
                    SkywayBridgeStatus.com &copy; 2017-{date.getFullYear()}{" "}
                    <Link href="https://www.iannerney.com" target="_blank">
                        Ian Nerney
                    </Link>
                </Paragraph>
                <Paragraph style={{ fontSize: "0.75rem" }}>
                    By using this web site you agree to the{" "}
                    <Link href="/terms-of-use" style={{ fontSize: "0.75rem" }}>
                        terms of use
                    </Link>
                    .
                </Paragraph>
            </Container>
        </footer>
    );
};

export default Footer;
