import { branding } from "../../site.config";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
    token: {
        fontSize: branding.baseFontSize,
        colorPrimary: branding.primaryColor,
        colorInfo: branding.primaryColor,
        linkDecoration: "underline",
        lineHeight: 2,
        fontSizeHeading2: 26,
        fontSizeHeading3: 22,
    },
};

export default theme;
