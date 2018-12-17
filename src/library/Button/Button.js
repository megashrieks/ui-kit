import React, { Fragment } from "react";
import "./Button.css";
function Button(props) {
	return (
		<Fragment>
			<button className="cui btn">{props.children}</button>
			<button className="cui btn btn-danger">
				{props.children} danger
			</button>
		</Fragment>
	);
}

export default Button;
