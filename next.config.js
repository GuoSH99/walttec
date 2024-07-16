// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     loader: 'akamai',
//     path: '',
//     unoptimized: true,
//   },
//   basePath: '',
//   assetPrefix: '',
// }
//
// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  basePath: '/walttec',
  assetPrefix: '/walttec/',
  trailingSlash: true,
}

module.exports = nextConfig

