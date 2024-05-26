/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

nextConfig.env = {
  UNDER_CONSTRUCTION: process.env.UNDER_CONSTRUCTION,
};

nextConfig.redirects = () => {
  return [
    nextConfig.env.UNDER_CONSTRUCTION === '1'
      ? {
          source: '/((?!under-construction).*)',
          destination: '/under-construction',
          permanent: false,
        }
      : null,
  ].filter(Boolean);
};

export default nextConfig;
