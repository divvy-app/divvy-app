const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: process.env.NODE_ENV || "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },

  devServer: {
    host: "localhost",
    static: {
      directory: path.join(__dirname),
    },
    open: true,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/api/**": {
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

      {
        test: /\.(?:png|svg|jpe?g|gif)$/,
        use: ["file-loader", "url-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
    }),
  ],
};
