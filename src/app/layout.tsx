import "./globals.css";
import "../../public/antd.min.css";
import Script from "next/script";
import { branding } from "site.config";
import type { Metadata } from "next";

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../site.config";
const app = initializeApp(firebaseConfig);

// Monitor auth state
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PageLayout } from "@/components/Layouts";

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

export const metadata: Metadata = {
    metadataBase: new URL(branding.canonicalUrlBase),
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <Script id="ga4-source" async src="https://www.googletagmanager.com/gtag/js?id=G-CH5BXLGBRE"></Script>
            <Script id="ga4">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CH5BXLGBRE');
            `}</Script>
            <Script id="hotjar" strategy="afterInteractive">{`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:976833,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}</Script>
            <body>{children}</body>
        </html>
    );
};
export default RootLayout;
