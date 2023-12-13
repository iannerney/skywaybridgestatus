import { MetadataRoute } from "next";
import { branding } from "site.config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${branding.canonicalUrlBase}/sitemap.xml`,
    };
}
