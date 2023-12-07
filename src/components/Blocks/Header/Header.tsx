"use client";
import Image from "next/image";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { branding } from "site.config";

const Header = () => {
    return (
        <AntdHeader
            className="header"
            style={{ backgroundColor: "white", height: "100px", display: "grid", placeItems: "center" }}
        >
            <div className="logo">
                <Image src={branding.logo} alt={branding.siteName} width={308} height={100} priority />
            </div>
        </AntdHeader>
    );
};

export default Header;
