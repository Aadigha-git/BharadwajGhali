/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
trailingSlash: true, // Ensures correct routing on GitHub Pages
  images: {
    unoptimized: true, // Disables Image Optimization (GitHub Pages does not support Next.js image optimization)
  },
  basePath: "/BharadwajGhali", // Set this to match your repository name
  assetPrefix: "/BharadwajGhali/",
};


module.exports = nextConfig;
