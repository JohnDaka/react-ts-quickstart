const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less']
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "tslint-loader",
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },

      {
        test: /\.less?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: false
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: false
            },
          }
        ]
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    index: 'index.html',
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
};
