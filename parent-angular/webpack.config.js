const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "parentAngular",
      remotes: {
        childReact: "childReact@http://localhost:8080/remoteEntry.js"
      },
    }),
  ],
};
