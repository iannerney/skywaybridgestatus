import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { branding } from "site.config";
import type { Metadata } from "next";
import "./globals.css";

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
    title: `${branding.siteName} - ${branding.siteTagline}`,
    description: branding.siteDescription,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
};

export default RootLayout;
