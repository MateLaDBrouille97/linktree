/** @type {import('next').NextConfig} */

const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
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
  webpack(config, options) {
    // your custom webpack config here
    return config
  }
})




