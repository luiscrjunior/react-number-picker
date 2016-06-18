import React from "react";

import "./style.scss";


const NumberPicker = class NumberPicker extends React.Component {
	constructor(props) {
		super(props);

		this.MAX_VALUE = this.maxValue();
	}

	maxValue() {
		let str_max = "";
		for (let i=0; i< this.props.digits; i++) str_max += "9";
		if (this.props.showDecimal) str_max += ".99";
		return parseFloat(str_max);
	}

	digitInteger(ltr_digit) {
		let sValue = this.props.value.toString();
		let a_sValue = sValue.split(".");
		let integer = a_sValue[0];
		
		let rtl_digit = this.props.digits - (ltr_digit-1);

		if (rtl_digit > integer.length) return "0";

		return integer[integer.length - rtl_digit];

	}

	digitDecimal(ltr_digit) {
		let sValue = this.props.value.toString();
		let a_sValue = sValue.split(".");
		let decimal = (a_sValue.length > 1 && a_sValue[1].length > 0)  ? a_sValue[1] : "00";
		if (decimal.length > 2) decimal = decimal.substr(0,2);
		if (decimal.length < 2) decimal = decimal + "0";

		return decimal[ltr_digit-1];

	}


	modifyValue(type, value, event) {
		event.preventDefault();
		if (!this.props.onChange) return;
		let value_to_add = (type === "down") ? (value *-1) : value;
		let new_value = (this.props.value + value_to_add);

		/* adjust float operations */
		let str_new_value = this.props.showDecimal ? new_value.toFixed(2) : new_value.toFixed(0);

		let adjusted_new_value = parseFloat(str_new_value);

		/* dont work with negative values, YET */
		if (adjusted_new_value < 0) adjusted_new_value = 0;

		/* prevent from exceed maximum possible values */
		if (adjusted_new_value > this.MAX_VALUE) adjusted_new_value = this.MAX_VALUE;

		this.props.onChange(adjusted_new_value);
	}

	renderButtons(type) {

		const elements = [];

		/* display an invisible cell */
		if (this.props.currency) {
			elements.push(<div key="currency" className="NumberPicker__cell button"></div>);
		}


		/* display tob/bottom buttons */
		for (let i=0; i< this.props.digits; i++) {
			let value_to_add = Math.pow(10, (this.props.digits-i-1) );
			elements.push(
					<div key={"integer-" + i} className={"NumberPicker__cell button " + type}>
						<span className={type} onClick={this.modifyValue.bind(this, type, value_to_add) }></span>
					</div>
			);

		}

		/* display invisible cell to decimal separator and tob/bottom buttons for decimals */
		if (this.props.showDecimal) {
			elements.push(<div key="decimal-separator" className="NumberPicker__cell decimal-separator"></div>);
			elements.push(<div key="decimal-1" className={"NumberPicker__cell button " + type}><span className={type} onClick={this.modifyValue.bind(this, type,0.1)}></span></div>);			
			elements.push(<div key="decimal-2" className={"NumberPicker__cell button " + type}><span className={type} onClick={this.modifyValue.bind(this, type,0.01)}></span></div>);
		}

		return elements;
	}

	renderDigits() {
		const elements = [];

		if (this.props.currency) {
			elements.push(<div key="currency" className="NumberPicker__cell currency">
						<span className="currency">{this.props.currency}</span>
					</div>
			);
		}

		for (let i=0; i< this.props.digits; i++) {
			let digit = (i+1);
			elements.push(
					<div key={digit} className="NumberPicker__cell digit">
						<span className="digit">{this.digitInteger(digit)}</span>
					</div>
			);
		}

		if (this.props.showDecimal) {
			elements.push(<div key="decimal-separator" className="NumberPicker__cell decimal-separator"><span className="decimal-separator">{this.props.decimalSeparator}</span></div>);
			elements.push(<div key="decimal-1" className="NumberPicker__cell digit"><span className="digit">{this.digitDecimal(1)}</span></div>);			
			elements.push(<div key="decimal-2" className="NumberPicker__cell digit"><span className="digit">{this.digitDecimal(2)}</span></div>);	
		}


		return elements;
	}

	render() {

		return (
			<div className="NumberPicker__wrapper">
				<div className="NumberPicker__table">
					<div className="NumberPicker__row">{this.renderButtons("up")}</div>
					<div className="NumberPicker__row">{this.renderDigits()}</div>
					<div className="NumberPicker__row">{this.renderButtons("down")}</div>
				</div>
			</div>
		);
	}
};

NumberPicker.propTypes = {
	onChange:React.PropTypes.func,
	digits: React.PropTypes.number.isRequired,
	currency: React.PropTypes.string,
	value: React.PropTypes.number.isRequired,
	showDecimal: React.PropTypes.bool.isRequired,
	decimalSeparator: React.PropTypes.string.isRequired
};

NumberPicker.defaultProps = {
	digits: 1,
	currency: null,
	value: 0.00,
	decimalSeparator: ".",
	showDecimal: false
};

export default NumberPicker;
