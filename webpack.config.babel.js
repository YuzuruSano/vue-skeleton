const path = require("path");
const current = process.cwd();
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const { VueLoaderPlugin } = require('vue-loader')

const supported = ['IE 10','IE 11','last 2 versions'];

module.exports = [{
	mode: 'production', // 追加,
	/* ビルドの起点となるファイルの設定 */
	entry:{
		main:['./dev/js/scripts/main.js']
		//複数連結
		//home:['./js/scripts/main.js','./js/scripts/home.js']
	},
	/* 出力されるファイルの設定 */
	output: {
		path: __dirname + '/build/js', // 出力先のパス
		filename: '[name].js' // 出力先のファイル名
	},
	cache: true,
	devtool: 'source-map',
	module: {
		/* loaderの設定 */
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader : 'babel-loader'
			},
			{ test: /\.html$/, loader: 'html-loader' },
			{
				test: /\.vue$/,
				exclude: /(node_modules)/,
				use: 'vue-loader'
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.pug$/, loader: 'pug-plain-loader'}
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	resolve: {
		// モジュールを読み込むときに検索するディレクトリの設定
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		// importするときに省略できる拡張子の設定
		extensions: ['.js', '.vue'],
		alias: {
		  // `import Vue from 'vue';` と記述したときの`from vue`が表すファイルパスを指定
		  'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new WebpackNotifierPlugin({
			title: 'compiled js',
			contentImage: path.join(__dirname, 'dev/js/icons/shibasaki_ko.jpg'),
			alwaysNotify: true
		}),
		new VueLoaderPlugin()
	],
	performance: { hints: false }
},
{
	mode: 'production',
	devtool: "source-map",
	entry: {
		style: './dev/sass/style.scss',
	},
	output: {
		path: path.join(__dirname, './dev/css'),
		filename: '[name].css'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
								importLoaders: 1,
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: [
									require('cssnano')({
										autoprefixer: {browsers: supported, add: true}
									})
								]
							}
						},
						{
							loader: "sass-loader", options: {
								sourceMap: true,
								importer: globImporter()
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename:'[name].css', allChunks: true }),
		new WebpackNotifierPlugin({
			title: 'compiled sass',
			contentImage: path.join(__dirname, 'dev/js/icons/yoshioka_riho.png'),
			alwaysNotify: true
		}),
	],
	performance: { hints: false }
}
];
