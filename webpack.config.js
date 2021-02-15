const { DefinePlugin, HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const PUBLIC_PATH = process.env.PUBLIC_PATH || "/";

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.[contenthash].js",
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
    }),
    new Dotenv({
      path: "./.env",
      safe: true,
      systemvars: true,
      defaults: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public/css",
          to: "css",
        },
        {
          from: "public/media",
          to: "media",
        },
        {
          from: "public/manifest.json",
        },
        {
          from: "public/robots.txt",
        },
      ],
    }),
    new DefinePlugin({
      "process.env.PUBLIC_PATH": JSON.stringify(PUBLIC_PATH),
    }),
  ],
};
