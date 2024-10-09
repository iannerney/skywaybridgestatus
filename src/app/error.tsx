"use client"; // Error components must be Client Components
import { PageLayout } from "@/components/Layouts";
import { Button, Result } from "antd";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    useEffect(() => {
        // TODO: Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <PageLayout>
            <Result
                status="500"
                title="Oops! Something went wrong."
                subTitle={
                    <>
                        Please try again later, or check our{" "}
                        <a href="https://stats.uptimerobot.com/lj0aVtLIgV?rid=3c9a8156af77ca" target="_blank">
                            service status
                        </a>
                        .
                    </>
                }
                extra={
                    <Button type="primary" onClick={reset}>
                        Try Again
                    </Button>
                }
                style={{ paddingTop: "48px" }}
            />
        </PageLayout>
    );
};

export default Error;
