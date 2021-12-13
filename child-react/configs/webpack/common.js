// shared config (dev and prod)
const { resolve } = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "childReact", // follow JS variable naming
      library: { type: "var", name: "childReact" },
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./components/Counter.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  performance: {
    hints: false,
  },
};
