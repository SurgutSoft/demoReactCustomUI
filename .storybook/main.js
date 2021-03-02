
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/preset-create-react-app',
    "@storybook/addon-essentials",
    '@storybook/addon-controls',
    '@storybook/addon-links',
  ],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf.map((rule) => {
          if (rule.test && !Array.isArray(rule.test) && rule.test.test('.module.scss')) {
            rule.use.push({
              loader: 'sass-resources-loader',
              options: {
                resources: ['src/styles/index.scss']
              },
            })
          }
          return rule;
        })
      }
      return rule;
    });

    // Return the altered config
    return config;
  },
};
