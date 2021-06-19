const getStyleRule = require("@rails/webpacker/package/utils/get_style_rule");
const { getThemeVariables } = require("antd/dist/theme");

module.exports = getStyleRule(/\.less$/i, false, [
  {
    loader: "less-loader",
    options: {
      lessOptions: {
        modifyVars: {
          ...getThemeVariables({
            dark: false,
            compact: false,
          }),
        },
      },
      javascriptEnabled: true,
      sourceMap: true,
    },
  },
]);
