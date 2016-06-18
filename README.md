# react-number-picker
Simple React component to pick number or price (you can specify a currency to display).

##Install

`npm install react-number-picker --save`

##Usage

```js
import React from "react";
import ReactDOM from "react-dom";

import NumberPicker from "react-number-picker";

import "react-number-picker/dist/style.css"

const Wrapper = class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1.99
		}
	}

	handleChange(new_value) {
		console.log("new value", new_value);
		this.setState({value: new_value});
	}

	render() {
		return <NumberPicker 
			value={this.state.value}  
			onChange={this.handleChange.bind(this)}
			/>;
	}
};

export default Wrapper;

ReactDOM.render(<Wrapper />, document.getElementById("app") );
```

##Styling

Don't forget to require/import `style.css` from `"react-number-picker/dist/style.css"`.

You can copy and customize this file. If you do some nice styling, please contribute to the project. The sass version is in the `src` folder of the package.

