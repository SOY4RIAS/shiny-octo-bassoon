const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const { DefinePlugin } = require("webpack");
const { parsed: env } = require("dotenv").config();

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "gpt-service",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new DefinePlugin({
        "process.env": {
          API_KEY: JSON.stringify(env.API_KEY),
        },
      }),
    ],
  });
};
