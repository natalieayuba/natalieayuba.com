/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
  redirects() {
    return [
      process.env.UNDER_CONSTRUCTION === "1"
        ? { source: "/((?!under-construction).*)", destination: "/under-construction", permanent: false }
        : null,
    ].filter(Boolean);
  }
};

export default nextConfig;
