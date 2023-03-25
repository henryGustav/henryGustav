/**
 * @type {import('next').NextConfig}
 */
//  const nextConfig = {
//     /* config options here */
//     basePath: "/henryGustav",
//     assetPrefix: "/henryGustav"
//   }

//   module.exports = nextConfig

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

console.log({ isGithubActions })
if (isGithubActions) {
  //   const repo = 'henryGustav'
  //   assetPrefix = `/${repo}/`
  //   basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     loader: 'imgix',
//     path: 'the "domain" of your Imigix source',
//   },
// }
