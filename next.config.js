/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/profile",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;