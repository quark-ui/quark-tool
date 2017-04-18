const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const MODULES_PATH = path.resolve(__dirname, '../node_modules');
const preset_env_path = path.resolve(MODULES_PATH, 'babel-preset-env');
const preset_react_path = path.resolve(MODULES_PATH, 'babel-preset-react');
const preset_stage1_path = path.resolve(MODULES_PATH, 'babel-preset-stage-1');

module.exports = (production = false) => {

  let entry, plugins;
  if (production) {
    entry = {
      index: path.join(CWD, './src/index'),
    };
    plugins = [];
  } else {
    entry = {
      demo: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:3000`,
        'webpack/hot/only-dev-server',
        path.join(CWD, './demo/index'),
      ],
    };
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // SourceMap plugin will define process.env.NODE_ENV as development
      new webpack.SourceMapDevToolPlugin({
          columns: false,
      }),
    ];
  }

  return {
    cache: !production,
    entry,
    output: {
      path: path.join(CWD, './build'),
      filename: '[name].js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [ preset_env_path, {
                  modules: false,
                } ],
                preset_react_path,
                preset_stage1_path,
              ],
            }
          },
        },
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader', options: {
              strictMath: true,
            } },
          ],
        },
        {
          test: /\.svg$/,
          include: [path.join(CWD, './src')],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  preset_env_path,
                  preset_react_path,
                ],
              }
            },
            {
              loader: 'svg-react-loader',
            }
          ],
        },
      ]
    },
    externals: {
      react: 'var React',
      'react-dom': 'var ReactDOM',
    },
    plugins,
    resolve: {
      modules: [
        'node_modules',
        MODULES_PATH,
      ]
    },
    target: 'web',
    resolveLoader: {
      modules: [ MODULES_PATH ],
    },
    devtool: production ? 'source-map': 'cheap-eval-source-map',
  };
}