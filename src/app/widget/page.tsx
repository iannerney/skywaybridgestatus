"use client";
import { PageLayout } from "@/components/Layouts";
import Link from "next/link";
import Script from "next/script";
import { Typography } from "antd";
import { Container } from "@/components/Blocks";
const { Title, Paragraph } = Typography;

const WidgetPage = () => {
    return (
        <PageLayout>
            <Script src="https://api.skywaybridgestatus.com/widget/v1/sbs-widget.js" />
            <Container>
                <Title level={1}>Status Widget</Title>
                <Paragraph>
                    The embeddable status widget allows for website owners to place a small snippet of code on their
                    website and display the current global status of the Sunshine Skyway bridge.
                </Paragraph>
                <div id="sbs-widget" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}></div>
                <Paragraph>
                    To display the widget on your website, you just need a few lines of HTML. First, add the following
                    script tag before the closing body tag of your HTML page.
                </Paragraph>
                <pre>{`<script src="https://api.skywaybridgestatus.com/widget/v1/sbs-widget.js"></script>`}</pre>
                <Paragraph>
                    Next, insert the following div anywhere on your page where you would like the widget to appear.
                </Paragraph>
                <pre>{`<div id="sbs-widget"></div>`}</pre>
                <Paragraph>
                    <b>Recommended:</b> You can then customize the display size and positioning by styling the div.
                    Here&apos;s an example of a centered div with a maximum width of 600px.
                </Paragraph>
                <pre>{`<div id="sbs-widget" style="max-width:600px; margin: 0 auto; text-align:center;"></div>`}</pre>
                <Paragraph>That&apos;s it! You now have your status widget implemented on your website.</Paragraph>
                <h2>Display Requirements</h2>
                <Paragraph>
                    To use the embeddable status widget, there are just a few requirements that must be adhered to:
                </Paragraph>
                <Paragraph>
                    <ol>
                        <li>
                            The Skyway Bridge Status logo must be visible, and displayed as shown in the example status
                            widget above. The JavaScript snippet will handle this for you by default.
                        </li>
                        <li>
                            The widget must be linked back to skywaybridgestatus.com, to provide data attribution and a
                            link for additional notices (if necessary). The JavaScript snippet will handle this for you
                            by default.
                        </li>
                    </ol>
                </Paragraph>
                <h2>Questions or Help</h2>
                <Paragraph>
                    If you have any questions or issues, please contact me via email at{" "}
                    <a href="mailto:ian@skywaybridgestatus.com">ian@skywaybridgestatus.com</a> – I&apos;d be happy to
                    assist.
                </Paragraph>
            </Container>
        </PageLayout>
    );
};

export default WidgetPage;
