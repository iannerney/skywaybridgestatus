import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { branding } from "../../launchandgrow.config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../launchandgrow.config";
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

export const metadata: Metadata = {
    title: `${branding.siteName} - ${branding.siteTagline}`,
    description: branding.siteDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
