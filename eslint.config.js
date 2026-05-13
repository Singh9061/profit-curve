const nextConfig = require("eslint-config-next");

if (nextConfig && nextConfig.extends) {
  delete nextConfig.extends;
}

module.exports = [nextConfig];
