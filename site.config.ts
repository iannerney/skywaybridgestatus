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
    apiKey: process.env.FB_AK,
    authDomain: process.env.FB_AD,
    databaseURL: process.env.FB_DBURL,
    projectId: process.env.FB_PID,
    storageBucket: process.env.FB_SB,
    messagingSenderId: process.env.FB_MSID,
    appId: process.env.FB_AID,
};

export { settings, branding, firebaseConfig };
