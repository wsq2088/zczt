/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/zczt',
  assetPrefix: '/zczt/',
  trailingSlash: true
}

module.exports = nextConfig 