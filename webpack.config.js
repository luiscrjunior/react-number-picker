/* global __dirname */

var autoprefixer = require("autoprefixer");
var path = require("path");


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
			{ test: /\.scss$/, loaders: ["style", "css", "postcss", "sass-loader"] }
		]
	},	
	postcss: function () {
		return [autoprefixer];
	},
	externals: {
		"react": "react",
		"react-dom": "react-dom"
	}	    
};


module.exports = config;