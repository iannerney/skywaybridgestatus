import { theme as defaultTheme } from "antd";
import { branding } from "site.config";
import type { ThemeConfig } from "antd";

const primaryColorVariants = [
    "#e6fbff",
    "#a6efff",
    "#7de3ff",
    "#54d4ff",
    "#2bc1fc",
    "#02a5f0",
    "#0083c9",
    "#0065a3",
    "#00497d",
    "#003057",
];

console.log({ defaultTheme });

const theme: ThemeConfig = {
    token: {
        fontSize: branding.baseFontSize,
        colorPrimary: branding.primaryColor,
        colorInfo: branding.primaryColor,
        linkDecoration: "underline",
    },
};

export default theme;
