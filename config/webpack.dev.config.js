var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var nodeModulesPath = path.resolve(__dirname, '../node_modules')
var moduleRootPath = path.resolve(__dirname, '../src')
var mainPath = path.resolve(__dirname, '../src/app.jsx')
var htmlPath = path.resolve(__dirname, '../src/index.html')

module.exports = {
  devtool: 'inline-source-map',

  // the entry point for webpack
  entry: [
    mainPath
  ],

  output: {
    publicPath: '/'
  },

  // hot loading support, and auto generation of index.html
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({template: htmlPath, inject: true}),
  ],

  // automatically add extensions to import statements
  resolve: {
    root: moduleRootPath,
    extensions: ['', '.js', '.jsx']
  },

  // use babel for es6
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { 
        test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }
    ]
  }
}