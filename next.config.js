/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration to avoid memory issues
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Disable webpack cache to prevent memory issues
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
