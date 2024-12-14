// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Handles image files
        generator: {
          filename: 'assets/images/[name][ext]', // Output location for images
        },
      },
      {
        test: /\.ttf$/,
        use: "file-loader",
        exclude: /node_modules/,
        type: "asset/resource", // Automatically handles copying the font to the output directory
        generator: {
          filename: "fonts/[name][ext][query]", // Customize output folder for fonts
        },
      },
    ],
  },
};
