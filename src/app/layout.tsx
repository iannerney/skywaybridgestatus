import "./globals.css";
import "../../public/antd.min.css";
import { branding, settings } from "site.config";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL(branding.canonicalUrlBase),
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            {process.env.GOOGLE_ADS === "1" && (
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8789676310669251"
                    crossOrigin="anonymous"
                />
            )}
            <body>{children}</body>
            <GoogleTagManager gtmId={settings.googleTagManagerId} />
        </html>
    );
};
export default RootLayout;
