/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_DOMAIN: "http://localhost:3000/",
    NEXT_PUBLIC_API_DOMAIN: "http://localhost:3000/api",
  },
};

export default nextConfig;
