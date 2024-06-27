/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/',
      },
      {
        source: '/sobre',
        destination: '/pages/about',
      },
      {
        source: '/projetos',
        destination: '/pages/projects',
      },
    ];
  },
};

export default nextConfig;
