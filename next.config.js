/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa") ({
  dest: "public", // swの出力ディレクトリ
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});
