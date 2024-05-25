/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "app.requestly.io",
      },
      {
        hostname: "flowbite.s3.amazonaws.com",
      },
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
