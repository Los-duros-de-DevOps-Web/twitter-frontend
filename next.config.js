/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_UTIL: process.env.URL_UTIL,
    URL_USER: process.env.URL_USER,
    URL_AUTH: process.env.URL_AUTH,
    URL_POSTNOTI: process.env.URL_POSTNOTI,
  },
};

module.exports = nextConfig;
