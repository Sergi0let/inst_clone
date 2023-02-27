/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'freelogopng.com',
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
      'public-content-aetn.video.aetnd.com',
      'static1.colliderimages.com',
    ],
  },
};

module.exports = nextConfig;
