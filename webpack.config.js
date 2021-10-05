/* eslint-disable indent */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const Webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/'
	},
	// output: {
	// 	path: path.resolve(__dirname, 'dist'),
	// 	filename: 'main.js',
	// 	clean: true
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/assests/index.html'),
			// PUBLIC_URL: process.env.PUBLIC_URL || '/public',
			title: process.env.STATS || 'public/',
		}),
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new Webpack.EvalSourceMapDevToolPlugin({}),
		new Dotenv(),
		new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
			analyzerMode: process.env.STATS || 'disabled'
		})
	],
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
	devServer: {
		port: 9600,
		open: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader')
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader?url=false']
			},
			{
				test: /\.(png|jpg)$/,
				include: path.join(__dirname, 'public'),
				loader: 'file-loader'
			}
		]
	},
};