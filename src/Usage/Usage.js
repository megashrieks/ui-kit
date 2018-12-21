import React, { Component } from "react";
import ButtonDemo from "./ButtonDemo/ButtonDemo";
import "./Usage.css";
import InputDemo from "./InputDemo/InputDemo";

export default class Usage extends Component {
	render() {
		return (
			<div className="centered">
				{/*<ButtonDemo />*/}
				<InputDemo />
			</div>
		);
	}
}
