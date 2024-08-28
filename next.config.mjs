/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    if (fileLoaderRule) {
      const resourceQueryNot = fileLoaderRule.resourceQuery?.not || [];

      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...resourceQueryNot, /url/] },
          use: ['@svgr/webpack'],
        },
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['ux-studio-bucket.s3.eu-north-1.amazonaws.com'],
  },
};

export default nextConfig;
