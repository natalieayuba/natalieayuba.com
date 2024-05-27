/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'
      ? [
          {
            source: '/((?!under-construction).*)',
            destination: '/under-construction',
            permanent: true,
          },
        ]
      : [
          {
            source: '/under-construction',
            destination: '/',
            permanent: true,
          },
        ];
  },
};

export default nextConfig;
