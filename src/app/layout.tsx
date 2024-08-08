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

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../site.config";
const app = initializeApp(firebaseConfig);

// Monitor auth state
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8789676310669251"
                crossOrigin="anonymous"
            ></script>
            <body>{children}</body>
            <GoogleTagManager gtmId={settings.googleTagManagerId} />
        </html>
    );
};
export default RootLayout;
