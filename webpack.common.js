const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    filename: "js/moto-e4-plus-[name].js",
    chunkFilename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            name: "img/moto-e4-plus-[name].[ext]"
          }
        }
      },
      {
        test: /\.(mp4)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            mimetype: "video/mp4",
            name: "video/moto-e4-plus-[name].[hash].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin("css/moto-e4-plus-[name].css"),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src/html/index.html"),
      title: "Moto e4 Plus",
      favicon: path.resolve(__dirname, "src/arquivos/img/Motorola-icon.png")
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          "node_modules/animate.css/animate.min.css"
        ),
        to: path.resolve(__dirname, "dist/css/animate.min.css"),
        toType: "file"
      }
    ])
  ]
};
