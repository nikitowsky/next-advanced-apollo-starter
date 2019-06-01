const withSass = require('@zeit/next-sass');

module.exports = withSass({
  experimental: {
    dynamicRouting: true,
  },
  env: {
    APP_ENV: process.env.APP_ENV || 'development',
  },
});
