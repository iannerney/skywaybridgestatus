import Image from "next/image";
import Link from "next/link";
import { branding } from "site.config";
import { Container } from "@/components/Blocks";

const Header = () => {
    return (
        <header style={{ backgroundColor: "white", height: "100px", display: "grid", placeItems: "center" }}>
            <Container>
                <Link href="/">
                    <Image src={branding.logo} alt={branding.siteName} width={308} height={100} priority />
                </Link>
            </Container>
        </header>
    );
};

export default Header;
