const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:'./app.js',
    output: {
        filename:'bundle.js',
    },
    devServer:{
        index:'index.html',
        watchContentBase: true,
    },
    watch:true,
    module: {
      rules: [{
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
                {
                    loader: 'file-loader?name=./assets/fonts/[name].[ext]'
                }
              ]
        },
        {test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: []
          }
        }]
      }]
    },
    plugins: [
      new LiveReloadPlugin({}),
      new webpack.WatchIgnorePlugin([
        path.join(__dirname, "node_modules")
      ]),
    ]
}