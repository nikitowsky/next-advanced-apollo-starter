const withSass = require('@zeit/next-sass');

module.exports = withSass({
  compression: false,
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
});
