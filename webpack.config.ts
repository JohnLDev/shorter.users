import 'dotenv/config'
import path from 'path'
import type webpack from 'webpack'
import NodemonPlugin from 'nodemon-webpack-plugin'
import DotenvWebpack from 'dotenv-webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

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
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [new NodemonPlugin(), new DotenvWebpack()]
}

export default config
