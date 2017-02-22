const path = require('path');
const node_modules = path.resolve(__dirname, 'node_modules');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let webpackConfig = {
	entry: {
		vendor: ['./src/polyfills.ts', './src/vendor.ts'],
		main: './src/main.ts'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash:8].js',
		/**
		 * html引用路径
		 */
		publicPath: '/'
	},
	plugins: [
      	new ExtractTextPlugin({filename: 'initial.css', allChunks: true}),
		/**
		 * 输出html
		 */
		new HtmlWebpackPlugin({
			template: 'src/static/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		/**
		 * 开发环境
		 */
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
		}),
		/**
		 * 优化
		 * 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
		 */
		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor']
		}),
		/**
		 * 报错继续运行2.0弃用NoErrorsPlugin，改用NoEmitOnErrorsPlugin
		 */
		new webpack.NoEmitOnErrorsPlugin(),
	],

	module: {
		exprContextCritical: false,
		rules: [
			{
				test: /\.ts$/,
				use: [
					'awesome-typescript-loader',
					'angular2-router-loader',
					'angular2-template-loader'
				]
			}, 
			{
				test: /\.css$/,
				use: ['raw-loader','css-loader']
			}, 
			{
				test: /\.scss$/,
				use: ['raw-loader','sass-loader'],
			},
			{
				test: /initial\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader?sourceMap'
				})
			},
			{
				test: /\.html$/,
				use: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: 'file-loader'
			}
		]
	}

};

let defaultConfig = {
	output: {
		filename: '[name].[hash:8].bundle.js',
		sourceMapFilename: '[name].[hash:8].bundle.map',
		chunkFilename: '[id].[hash:8].chunk.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	devServer: {
		contentBase: './',
		port: 8080,
		inline: true,
		stats: 'errors-only',
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 100,
			poll: 500
		}
	},
	node: {
		global: true,
		crypto: 'empty',
		__dirname: true,
		__filename: true,
		Buffer: false,
		clearImmediate: false,
		setImmediate: false
	}
};
module.exports = webpackMerge(defaultConfig, webpackConfig);
