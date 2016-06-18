/* global __dirname */

var autoprefixer = require("autoprefixer");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var config = {
	entry: {
		teste: "./src/NumberPicker.jsx"
	},
	output: {
		path: __dirname + "/dist",
		filename: "react-number-picker.js",
		library: "shared-components",
		libraryTarget: "umd"		
	},
	resolve: {
		root: path.resolve(__dirname)
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: "babel" },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass") }
		]
	},	
	postcss: function () {
		return [autoprefixer];
	},
	externals: {
		"react": "react",
		"react-dom": "react-dom"
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	]
};


module.exports = config;