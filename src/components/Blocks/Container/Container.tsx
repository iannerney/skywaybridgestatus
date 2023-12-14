import React from "react";

const Container = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
    return (
        <div
            className="content-container"
            style={{ margin: "0 auto", padding: "0 24px 24px 24px", maxWidth: "1140px", ...style }}
        >
            {children}
        </div>
    );
};

export default Container;
