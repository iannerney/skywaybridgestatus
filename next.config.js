/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    output: "export",
    // trailingSlash: true,
    // skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
