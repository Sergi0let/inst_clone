/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'freelogopng.com',
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
