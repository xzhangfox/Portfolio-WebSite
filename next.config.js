/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // basePath: '/your-repo-name', // Uncomment if deploying to a GitHub project page (not root)
}

module.exports = nextConfig
