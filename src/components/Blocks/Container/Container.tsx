import React from "react";

const Container = ({
    children,
    style,
    id,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    id?: string;
}) => {
    return (
        <div
            id={id || undefined}
            className="content-container"
            style={{ margin: "0 auto", padding: "0 24px 12px 24px", maxWidth: "1140px", ...style }}
        >
            {children}
        </div>
    );
};

export default Container;
