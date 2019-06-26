const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    APP_ENV: process.env.APP_ENV || 'development',
  },
});
