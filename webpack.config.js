const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: process.env.NODE_ENV || "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },

  devServer: {
    host: "localhost",
    port: 8080,
    // match the output path
    static: {
      directory: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    hot: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      "/bill/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
      "/assets/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
      "/assets/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
      "/user/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },

      {
        test: /\.(?:s?c|sa)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
    }),
  ],
};
