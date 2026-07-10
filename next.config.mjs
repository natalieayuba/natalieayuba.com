const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.0.244"],
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false,
              typescript: true,
            },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules
      .filter((rule) => rule.oneOf)
      .flatMap((rule) => rule.oneOf)
      .flatMap((rule) => rule.use ?? [])
      .filter((loader) => loader.loader?.includes("css-loader"))
      .forEach((loader) => {
        if (loader.options?.modules) {
          loader.options.modules.exportLocalsConvention = "camelCaseOnly";
        }
      });

    return config;
  },
};

export default nextConfig;
