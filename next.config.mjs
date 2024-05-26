/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  redirects() {
    return [
      {
        source: '/((?!under-construction).*)',
        destination: '/under-construction',
        permanent: false,
      },
    ].filter(Boolean);
  },
};

export default nextConfig;
