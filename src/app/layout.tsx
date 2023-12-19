import "./globals.css";
import "../../public/antd.min.css";
import { branding, settings } from "site.config";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Viewport } from "next";
import { getAuthenticatedAppForUser } from "@/lib/firebase";
// Force next.js to treat this route as server-side rendered
// Without this line, during the build process, next.js will treat this route as static and build a static HTML file for it
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL(branding.canonicalUrlBase),
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const { currentUser } = await getAuthenticatedAppForUser();
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleTagManager gtmId={settings.googleTagManagerId} />
        </html>
    );
};
export default RootLayout;
