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
                    <Link href="https://www.iannerney.com" target="_blank" rel="nofollow noopener">
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
                <Paragraph style={{ fontSize: "0.75rem" }}>
                    Notice an issue? Report it on our{" "}
                    <Link href="https://github.com/iannerney/skywaybridgestatus/issues">GitHub page</Link>. You can also
                    check{" "}
                    <Link
                        href="https://stats.uptimerobot.com/lj0aVtLIgV?rid=3c9a8156af77ca"
                        target="_blank"
                        rel="nofollow noopener"
                    >
                        UptimeRobot
                    </Link>{" "}
                    for our current service status.
                </Paragraph>
            </Container>
        </footer>
    );
};

export default Footer;
