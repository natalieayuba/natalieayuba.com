/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  redirects() {
    return process.env.UNDER_CONSTRUCTION === 'true'
      ? [
          {
            source: '/((?!under-construction).*)',
            destination: '/under-construction',
            permanent: false,
          },
        ]
      : [
          {
            source: '/under-construction',
            destination: '/',
            permanent: false,
          },
        ];
  },
};

export default nextConfig;
