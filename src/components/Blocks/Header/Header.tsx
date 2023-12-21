"use client";
import Image from "next/image";
import Link from "next/link";
import { branding } from "site.config";
import { Container } from "@/components/Blocks";
import { Capacitor } from "@capacitor/core";

const Header = () => {
    const platform = Capacitor.getPlatform();
    return (
        <header
            style={{
                backgroundColor: "white",
                height: platform !== "web" ? "150px" : "100px",
                paddingTop: platform !== "web" ? "50px" : "0px",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Container>
                <Link href="/">
                    <Image src={branding.logo} alt={branding.siteName} width={308} height={100} priority />
                </Link>
            </Container>
        </header>
    );
};

export default Header;
