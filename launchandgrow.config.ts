interface IBrandingConfigs {
    siteName: string;
    siteTagline: string;
    siteDescription: string;
    primaryColor: string;
    logo: string;
}

const settings = {};

const branding: IBrandingConfigs = {
    siteName: "Launch&Grow",
    siteTagline: "We launch digital products, and help you scale.",
    siteDescription:
        "Our purpose is to help bring your ideas to life. From simple websites, to complex SaaS and e-commerce concepts, our team has the tools and expertise to bring your vision to market in record time. 🚀",
    primaryColor: "#45C4B0",
    logo: "/logo/launchandgrow.svg",
};

export { settings, branding };
