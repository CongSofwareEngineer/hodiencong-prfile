/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
    instrumentationHook: true,
    // cpus: 16,
    workerThreads: true,
    optimizeCss: true, // enabling this will enable SSR for Tailwind
    swcMinify: true,
    gzipSize: true,
    optimizeServerReact: true,
    serverMinification: true,
    webpackBuildWorker: true,
    serverActions: true,
    serverSourceMaps: true,
    optimizePackageImports: [],
    forceSwcTransforms: true,
    swcTraceProfiling: true
    // isrMemoryCacheSize: 10000000
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler: {
    reactRemoveProperties: true,
    // styledComponents: true
    styledComponents: {
      minify: true,
      // ssr: true,
      displayName: true
    }
    // removeConsole: process.env.NODE_ENV === 'production'
  },
  eslint: {
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  compress: true,
  reactStrictMode: true,
  cleanDistDir: false,
  staticPageGenerationTimeout: 120,
  swcMinify: true
}

module.exports = nextConfig
