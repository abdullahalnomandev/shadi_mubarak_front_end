import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 100,
    },
  },
  staticPageGenerationTimeout: 300,
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
