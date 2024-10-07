/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github-stats-readme-langs.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'stats-github-app.vercel.app',
      },
    ],
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
