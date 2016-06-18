(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["shared-components"] = factory(require("react"));
	else
		root["shared-components"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NumberPicker = function (_React$Component) {
		_inherits(NumberPicker, _React$Component);

		function NumberPicker(props) {
			_classCallCheck(this, NumberPicker);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberPicker).call(this, props));

			_this.MAX_VALUE = _this.maxValue();
			return _this;
		}

		_createClass(NumberPicker, [{
			key: "maxValue",
			value: function maxValue() {
				var str_max = "";
				for (var i = 0; i < this.props.digits; i++) {
					str_max += "9";
				}if (this.props.showDecimal) str_max += ".99";
				return parseFloat(str_max);
			}
		}, {
			key: "digitInteger",
			value: function digitInteger(ltr_digit) {
				var sValue = this.props.value.toString();
				var a_sValue = sValue.split(".");
				var integer = a_sValue[0];

				var rtl_digit = this.props.digits - (ltr_digit - 1);

				if (rtl_digit > integer.length) return "0";

				return integer[integer.length - rtl_digit];
			}
		}, {
			key: "digitDecimal",
			value: function digitDecimal(ltr_digit) {
				var sValue = this.props.value.toString();
				var a_sValue = sValue.split(".");
				var decimal = a_sValue.length > 1 && a_sValue[1].length > 0 ? a_sValue[1] : "00";
				if (decimal.length > 2) decimal = decimal.substr(0, 2);
				if (decimal.length < 2) decimal = decimal + "0";

				return decimal[ltr_digit - 1];
			}
		}, {
			key: "modifyValue",
			value: function modifyValue(type, value, event) {
				event.preventDefault();
				if (!this.props.onChange) return;
				var value_to_add = type === "down" ? value * -1 : value;
				var new_value = this.props.value + value_to_add;

				/* adjust float operations */
				var str_new_value = this.props.showDecimal ? new_value.toFixed(2) : new_value.toFixed(0);

				var adjusted_new_value = parseFloat(str_new_value);

				/* dont work with negative values, YET */
				if (adjusted_new_value < 0) adjusted_new_value = 0;

				/* prevent from exceed maximum possible values */
				if (adjusted_new_value > this.MAX_VALUE) adjusted_new_value = this.MAX_VALUE;

				this.props.onChange(adjusted_new_value);
			}
		}, {
			key: "renderButtons",
			value: function renderButtons(type) {

				var elements = [];

				/* display an invisible cell */
				if (this.props.currency) {
					elements.push(_react2.default.createElement("div", { key: "currency", className: "NumberPicker__cell button" }));
				}

				/* display tob/bottom buttons */
				for (var i = 0; i < this.props.digits; i++) {
					var value_to_add = Math.pow(10, this.props.digits - i - 1);
					elements.push(_react2.default.createElement(
						"div",
						{ key: "integer-" + i, className: "NumberPicker__cell button " + type },
						_react2.default.createElement("span", { className: type, onClick: this.modifyValue.bind(this, type, value_to_add) })
					));
				}

				/* display invisible cell to decimal separator and tob/bottom buttons for decimals */
				if (this.props.showDecimal) {
					elements.push(_react2.default.createElement("div", { key: "decimal-separator", className: "NumberPicker__cell decimal-separator" }));
					elements.push(_react2.default.createElement(
						"div",
						{ key: "decimal-1", className: "NumberPicker__cell button " + type },
						_react2.default.createElement("span", { className: type, onClick: this.modifyValue.bind(this, type, 0.1) })
					));
					elements.push(_react2.default.createElement(
						"div",
						{ key: "decimal-2", className: "NumberPicker__cell button " + type },
						_react2.default.createElement("span", { className: type, onClick: this.modifyValue.bind(this, type, 0.01) })
					));
				}

				return elements;
			}
		}, {
			key: "renderDigits",
			value: function renderDigits() {
				var elements = [];

				if (this.props.currency) {
					elements.push(_react2.default.createElement(
						"div",
						{ key: "currency", className: "NumberPicker__cell currency" },
						_react2.default.createElement(
							"span",
							{ className: "currency" },
							this.props.currency
						)
					));
				}

				for (var i = 0; i < this.props.digits; i++) {
					var digit = i + 1;
					elements.push(_react2.default.createElement(
						"div",
						{ key: digit, className: "NumberPicker__cell digit" },
						_react2.default.createElement(
							"span",
							{ className: "digit" },
							this.digitInteger(digit)
						)
					));
				}

				if (this.props.showDecimal) {
					elements.push(_react2.default.createElement(
						"div",
						{ key: "decimal-separator", className: "NumberPicker__cell decimal-separator" },
						_react2.default.createElement(
							"span",
							{ className: "decimal-separator" },
							this.props.decimalSeparator
						)
					));
					elements.push(_react2.default.createElement(
						"div",
						{ key: "decimal-1", className: "NumberPicker__cell digit" },
						_react2.default.createElement(
							"span",
							{ className: "digit" },
							this.digitDecimal(1)
						)
					));
					elements.push(_react2.default.createElement(
						"div",
						{ key: "decimal-2", className: "NumberPicker__cell digit" },
						_react2.default.createElement(
							"span",
							{ className: "digit" },
							this.digitDecimal(2)
						)
					));
				}

				return elements;
			}
		}, {
			key: "render",
			value: function render() {

				return _react2.default.createElement(
					"div",
					{ className: "NumberPicker__wrapper" },
					_react2.default.createElement(
						"div",
						{ className: "NumberPicker__table" },
						_react2.default.createElement(
							"div",
							{ className: "NumberPicker__row" },
							this.renderButtons("up")
						),
						_react2.default.createElement(
							"div",
							{ className: "NumberPicker__row" },
							this.renderDigits()
						),
						_react2.default.createElement(
							"div",
							{ className: "NumberPicker__row" },
							this.renderButtons("down")
						)
					)
				);
			}
		}]);

		return NumberPicker;
	}(_react2.default.Component);

	NumberPicker.propTypes = {
		onChange: _react2.default.PropTypes.func,
		digits: _react2.default.PropTypes.number.isRequired,
		currency: _react2.default.PropTypes.string,
		value: _react2.default.PropTypes.number.isRequired,
		showDecimal: _react2.default.PropTypes.bool.isRequired,
		decimalSeparator: _react2.default.PropTypes.string.isRequired
	};

	NumberPicker.defaultProps = {
		digits: 1,
		currency: "$",
		value: 0.00,
		decimalSeparator: ".",
		showDecimal: true
	};

	exports.default = NumberPicker;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".NumberPicker__wrapper {\n  display: inline-block;\n  margin: 0;\n  padding: 3px 10px;\n  border-radius: 10px;\n  background-color: #FAFAFA;\n  border: 1px solid #E0E0E0;\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05) 0%, transparent 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, transparent 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#12000000', endColorstr='#00000000',GradientType=0 ); }\n  .NumberPicker__wrapper:after {\n    display: block;\n    content: '';\n    clear: both; }\n\n.NumberPicker__table {\n  display: table; }\n\n.NumberPicker__row {\n  display: table-row; }\n\n.NumberPicker__cell {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  min-width: 10px;\n  margin: 0;\n  padding: 0 5px 0 10px; }\n\n.NumberPicker__cell > span.digit {\n  font-family: Tahoma, Geneva, sans-serif;\n  color: #616161;\n  font-size: 16pt; }\n\n.NumberPicker__cell.decimal-separator {\n  padding-left: 0;\n  padding-right: 0; }\n\n.NumberPicker__cell.decimal-separator > span.decimal-separator {\n  font-family: Tahoma, Geneva, sans-serif;\n  color: #616161;\n  font-weight: bold;\n  font-size: 16pt; }\n\n.NumberPicker__cell > span {\n  /* prevents selecting when double clicking */\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  -ms-user-select: none;\n  /* IE10+ */ }\n\n.NumberPicker__cell.currency > span.currency {\n  font-family: Tahoma, Geneva, sans-serif;\n  color: #616161;\n  font-weight: bold;\n  font-size: 16pt; }\n\n.NumberPicker__cell.button.up {\n  padding-bottom: 5px; }\n\n.NumberPicker__cell.button.down {\n  padding-top: 5px; }\n\n.NumberPicker__cell.button > span {\n  cursor: pointer; }\n\n.NumberPicker__cell.button > span.up {\n  position: relative;\n  top: -10px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 5px 10px 5px;\n  border-color: transparent transparent #ddd transparent; }\n\n.NumberPicker__cell.button > span.down {\n  position: relative;\n  top: 10px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 10px 5px 0 5px;\n  border-color: #ddd transparent transparent transparent; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;