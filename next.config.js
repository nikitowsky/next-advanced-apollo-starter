const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    GRAPHQL_URL: 'https://example.com/graphql',
  },
});
