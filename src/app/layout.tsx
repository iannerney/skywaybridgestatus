import "./globals.css";
import "../../public/antd.min.css";
import { branding, settings } from "site.config";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(branding.canonicalUrlBase),
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleTagManager gtmId={settings.googleTagManagerId} />
        </html>
    );
};
export default RootLayout;
