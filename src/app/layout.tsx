import { branding } from "site.config";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import "../../public/antd.min.css";

// // Initialize Firebase
// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "../../site.config";
// const app = initializeApp(firebaseConfig);

// // Monitor auth state
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { PageLayout } from "@/components/Layouts";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });
export const metadata: Metadata = {
    title: `${branding.siteName} - ${branding.siteTagline}`,
    description: branding.siteDescription,
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
            <Script id="facebook-pixel">{`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '363765647455545');
            fbq('track', 'PageView');`}</Script>
            <Script id="hotjar" strategy="afterInteractive">{`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:976833,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}</Script>
            <body>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=363765647455545&ev=PageView&noscript=1"
                    />
                </noscript>
                {children}
            </body>
        </html>
    );
};
export default RootLayout;
