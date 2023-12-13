import { MetadataRoute } from "next";
import { branding } from "site.config";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: branding.canonicalUrlBase,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${branding.canonicalUrlBase}/terms-of-use`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
