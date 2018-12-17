import React, { Fragment } from "react";
import "./Button.css";
function Button(props) {
	return (
		<Fragment>
			<button className="cui btn">{props.children}</button>
			<button className="cui btn btn-danger">
				{props.children} danger
			</button>
			<button className="cui btn btn-warning">
				{props.children} warning
			</button>
			<button className="cui btn btn-success">
				{props.children} success
			</button>
			<button className="cui btn btn-info">{props.children} info</button>
		</Fragment>
	);
}

export default Button;
