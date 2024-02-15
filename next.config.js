/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fl511.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
