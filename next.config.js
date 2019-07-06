const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
});
