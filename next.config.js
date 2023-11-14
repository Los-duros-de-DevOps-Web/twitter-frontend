/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 env: {
    URL_UTIL: process.env.URL_UTIL || "default-value-if-secret-not-available",
    URL_USER: process.env.URL_USER || "default-value-if-secret-not-available",
    URL_AUTH: process.env.URL_AUTH || "default-value-if-secret-not-available",
    URL_FRONT: process.env.URL_FRONT || "default-value-if-secret-not-available",
    URL_POSTNOTI: process.env.URL_POSTNOTI || "default-value-if-secret-not-available",
  },
};

module.exports = nextConfig;
