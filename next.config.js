/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, 
  basePath: "/BharadwajGhali", 
  assetPrefix: "/BharadwajGhali/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
