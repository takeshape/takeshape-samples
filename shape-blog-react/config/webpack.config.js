'use strict';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';
const autoprefixer = require('autoprefixer');

const hotloader = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server'
];

const app = [path.resolve(__dirname, '../src/index.js')];

function getFilename(name, ext) {
  return devMode ? `${name}.${ext}` : `${name}.[chunkhash].${ext}`;
}

let plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(devMode ? 'development' : 'production')
    }
  }),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
  }),
  new ManifestPlugin({
    fileName: 'asset-manifest.json'
  })
];

if (devMode) {
  plugins = plugins.concat([
    new CaseSensitivePathsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]);
}

const nodeLibs = Object.keys(require('node-libs-browser'));
const excludedLibs = {};

nodeLibs.forEach(lib => {
  excludedLibs[lib] = false;
});

module.exports = {
  node: excludedLibs,
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'cheap-module-eval-source-map' : undefined,
  entry: {
    bundle: devMode ? hotloader.concat(app) : app
  },
  output: {
    path: path.resolve(__dirname, devMode ? '../public' : '../static/build'),
    filename: getFilename('[name]', 'js'),
    chunkFilename: getFilename('[name]', 'js'),
    publicPath: devMode ? 'http://localhost:3000/' : '/'
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.json',
      '.css', '.scss',
      '.jpeg', '.jpg', '.gif', '.png', '.svg', '.woff', '.ttf', '.wav', '.mp3'
    ],
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules'
    ]
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        sideEffects: false,
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.s?css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ]
      },
      {
        test: /\.ya?ml$/,
        use: ['json-loader', 'yaml-loader']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]'
          }
        }
      }
    ]
  }
};
