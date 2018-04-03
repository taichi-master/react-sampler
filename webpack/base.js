const path = require('path');

const pkg = require('../package.json'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, '../src'),
      SERVER_DIR = path.resolve(__dirname, '../server'),
      STYLE_DIR = path.resolve(__dirname, '../style'),
      TEST_DIR = path.resolve(__dirname, '../test'),
      DIST_DIR = path.resolve(__dirname, '../dist'),
      NODE_MODULES_DIR = path.resolve(__dirname, '../node_modules'),
      PACKAGE_JSON = path.resolve(__dirname, '../package.json'),
      VIEWS_DIR = path.join(SOURCE_DIR, 'views'),
      COMPONENTS_DIR = path.join(VIEWS_DIR, 'components'),
      CONTAINERS_DIR = path.join(SOURCE_DIR, 'containers'),
      UTILS_DIR = path.join(SOURCE_DIR, 'utils'),
      MODELS_DIR = path.join(SOURCE_DIR, 'models'),
      ACTIONS_DIR = path.join(MODELS_DIR, 'actions'),
      REDUCERS_DIR = path.join(MODELS_DIR, 'reducers');

module.exports = {
  devtool: 'source-map',
  context: SOURCE_DIR,
  entry: {
    main: './main.js'
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              // "syntax-dynamic-import"
            ]
          }
        }
      },
      {test: /\.(eot|otf|png|svg|ttf|woff|woff2?)(\?.+)?$/, loader: 'url-loader'}
    ]
  },
  resolve: {
    alias: {
      'package.json': PACKAGE_JSON,
      server: SERVER_DIR,
      style: STYLE_DIR,
      test: TEST_DIR,
      node_modules: NODE_MODULES_DIR,
      utils: UTILS_DIR,
      models: MODELS_DIR,
      views: VIEWS_DIR,
      components: COMPONENTS_DIR,
      containers: CONTAINERS_DIR,
      actions: ACTIONS_DIR,
      reducers: REDUCERS_DIR
    }
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   template: require('html-webpack-template'),
    //   title: pkg.name,
    //   mobile: true,
    //   lang: 'en-US',
    //   meta: [
    //     {
    //       name: 'description',
    //       content: pkg.description
    //     },
    //     {
    //       name: 'keywords',
    //       content: pkg.keywords.join(', ')
    //     }
    //   ],
    //   googleAnalytics: {
    //     trackingId: pkg.cfg.googleAnalytics.trackingId,
    //     pageViewOnLoad: pkg.cfg.googleAnalytics.pageViewOnLoad
    //   },
    //   window: {
    //     __INITIAL_STATE__: pkg.cfg.initialState
    //   },
    //   appMountId: 'app'
    // })
  ]
};
