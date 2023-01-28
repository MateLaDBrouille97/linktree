/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
   domains:["portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging.s3.amazonaws.com",]
  },
  env: {
    AWS_EXPORT_FILE: './aws-exports.js',
  },
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;

}

module.exports = nextConfig
