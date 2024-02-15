interface ISettingsConfigs {
    googleTagManagerId: string;
}
interface IBrandingConfigs {
    siteName: string;
    siteTagline: string;
    siteDescription: string;
    primaryColor: string;
    baseFontSize: number;
    logo: string;
    canonicalUrlBase: string;
}

const settings = {
    googleTagManagerId: "GTM-M4B9S3QP",
};

const branding: IBrandingConfigs = {
    siteName: "Skyway Bridge Status",
    siteTagline: "Is the Sunshine Skyway Bridge open?",
    siteDescription:
        "Want to know if the Sunshine Skyway Bridge is open or closed? You've come to the right place! We pull and report the Skyway Bridge status every 5 minutes.",
    primaryColor: "#006FA4",
    baseFontSize: 16,
    logo: "/logos/skyway-bridge-status-logo.svg",
    canonicalUrlBase: "https://www.skywaybridgestatus.com",
};

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export { settings, branding, firebaseConfig };
