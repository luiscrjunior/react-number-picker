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
		currency: null,
		value: 0.00,
		decimalSeparator: ".",
		showDecimal: false
	};

	exports.default = NumberPicker;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;