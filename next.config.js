/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa") ({
  dest: "public", // swの出力ディレクトリ
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && "/repository_name",
  trailingSlash: true,
});
