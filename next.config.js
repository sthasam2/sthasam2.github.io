const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
