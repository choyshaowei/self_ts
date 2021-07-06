const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/decorators/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ],
};
