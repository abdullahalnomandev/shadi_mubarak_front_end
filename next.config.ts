import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 300,
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);