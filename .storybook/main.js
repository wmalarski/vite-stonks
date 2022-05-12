const path = require("path");
const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");
const {
  AntdResolve,
  createStyleImportPlugin,
} = require("vite-plugin-style-import");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-ant-design",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    config.plugins.push(vanillaExtractPlugin());
    // config.plugins.push(createStyleImportPlugin({ resolves: [AntdResolve()] }));

    config.resolve.alias = [
      ...(config.resolve.alias ?? []),
      {
        find: "@",
        replacement: path.resolve(__dirname, "../src"),
      },
    ];
    return config;
  },
};
