const webpack = require('webpack');
const path = require('path');
const tsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const webpackBar = require('webpackbar');

const distPath = path.resolve(path.join(__dirname, 'dist'));

const config = {
  devtool: 'inline-source-map',
  externals: [
    webpackNodeExternals({
      allowlist: ['tslib'],
    }),
  ],
  mode: 'development',
  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    fallback: {
      __dirname: false,
      __filename: false,
      console: false,
      global: false,
      process: false,
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@tools': path.resolve(__dirname, 'src/tools'),
      '@options': path.resolve(__dirname, 'src/options'),
    },
    plugins: [
      new tsconfigPathsWebpackPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
  },

  plugins: [new webpackBar({ name: '-node-fp' })],

  entry: {
    'node-fp': ['./src/index.ts'],
  },

  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: distPath,
  },

  optimization: {
    minimize: false, // <---- disables uglify.
    // minimizer: [new UglifyJsPlugin()] if you want to customize it.
  },

  module: {
    rules: [
      {
        loader: 'json-loader',
        test: /\.json$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
};

module.exports = config;
