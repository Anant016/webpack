// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     filename: "./dist/app.bundle.js"
//   }
// };

var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.join(__dirname, "dist");
var APP_DIR = path.join(__dirname, "src");

const VENDOR_LIBS = ["react", "react-dom", "react-router-dom"];

var config = {
  // entry: APP_DIR + "/app.js",
  entry: {
    bundle: APP_DIR + "/app.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: BUILD_DIR,
    // filename: "app.bundle.js"
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        //   include: APP_DIR,
        exclude: /node_modules/,
        // use: "babel-loader"
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/syntax-dynamic-import"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader"
      }
    ]
  },
  devServer: {
    // compress: true,
    contentBase: BUILD_DIR,
    port: 8000
    // headers: {},
    // disableHostCheck: false,
    // open: true,
    // hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ["vendor", "manifest"]
    // })
  ]
};

module.exports = config;
