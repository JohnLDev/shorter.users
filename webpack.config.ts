import 'dotenv/config';
import path from 'path';
import webpack from 'webpack';
import NodemonPlugin from 'nodemon-webpack-plugin';
import DotenvWebpack from 'dotenv-webpack';

const config: webpack.Configuration = {
  mode: process.env.STAGE === 'production' ? 'production' : 'development',
  entry: './src/server.ts',
  target: 'node',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [new NodemonPlugin(), new DotenvWebpack()],
};

export default config;
