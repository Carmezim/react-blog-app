var HtmlWebpackPlugin = require("html-webpack-plugin")
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/index.html",
	filename: "index.html",
	inject: "body"
});

module.exports = {
	entry: "./src/main.js",
	output: {
				path: __dirname + "/dist",
				filename: "bundle.js",
				publicPath: "assets"
	},

	module: {
		loaders: [
			{
				test: /\.js$/, exclude: /node_modules/, 
				loader: ['babel-loader'], 
				include: __dirname,
				query: {
					presets: ["react", "es2015", "stage-0", "react-hmre"]
				},
			},	
			{
				test: /\.json$/, 
				loader: "json",		
			},
			{
				test: /\.css$/,	
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},

	resolve: {
		extensios: ['', '.js', '.jsx']
	},

	postcss: ['autoprefixer'],

	plugins: [HTMLWebpackPluginConfig],	

	devtool: 'source-map',
	devServer: { //config for webpack dev server
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
	}				
};	



