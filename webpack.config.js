const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  cache: false,

  entry: "./src/index.tsx",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/star-wars/",
    clean: true,
    assetModuleFilename: "assets/images/[name].[hash][ext]",
  },

  resolve: {
    extensions: [".jsx", ".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
  ],

  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/index.html" }],
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Правило для CSS модулей
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource", // Используем встроенный модуль для работы с файлами
        generator: {
          filename: "assets/images/[name].[hash][ext]",
        },
      },
    ],
  },
};
