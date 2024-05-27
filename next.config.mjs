/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    // return process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'
    //   ?
    return [
      {
        source: '/((?!under-construction).*)',
        destination: '/under-construction',
        permanent: false,
      },
    ];
    // : [
    //     {
    //       source: '/under-construction',
    //       destination: '/',
    //       permanent: false,
    //     },
    //   ];
  },
};

export default nextConfig;
