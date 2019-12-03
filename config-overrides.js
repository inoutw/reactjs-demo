const {
  override,
  fixBabelImports,
  useEslintRc,
  addPostcssPlugins
} = require("customize-cra");
const postcssPresetEnv = require("postcss-preset-env");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  }),
  useEslintRc("./.eslintrc.js"),
  addPostcssPlugins([
    postcssPresetEnv({
      stage: 0,
      features: {
        "nesting-rules": true
      }
    })
  ])
);
