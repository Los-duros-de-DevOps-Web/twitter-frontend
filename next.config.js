/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_UTIL: "http://localhost:3000/",
    URL_USER: "http://localhost:3001/",
    URL_AUTH: "http://localhost:3002/",
    URL_FRONT: "http://localhost:3003/",
    URL_POSTNOTI: "http://localhost:3004/",
  },
};

module.exports = nextConfig;
