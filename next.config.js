const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    GRAPHQL_URL: 'https://api.graph.cool/simple/v1/cj5geu3slxl7t0127y8sity9r',
  },
});
