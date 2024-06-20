/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  },
  images: {
    unoptimized: true, // Necessary for static exports when using next/image
  },
};

module.exports = nextConfig;
