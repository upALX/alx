/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'github-stats-readme-langs.vercel.app',
      'stats-github-app.vercel.app',
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
