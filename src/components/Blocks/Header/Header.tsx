"use client";
import Image from "next/image";
import Link from "next/link";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { branding } from "site.config";

const Header = () => {
    return (
        <AntdHeader
            className="header"
            style={{ backgroundColor: "white", height: "100px", display: "grid", placeItems: "center" }}
        >
            <div className="logo">
                <Link href="/">
                    <Image src={branding.logo} alt={branding.siteName} width={308} height={100} priority />
                </Link>
            </div>
        </AntdHeader>
    );
};

export default Header;
