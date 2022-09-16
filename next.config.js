/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['audimediacenter-a.akamaihd.net'],
    },
};

module.exports = nextConfig;
