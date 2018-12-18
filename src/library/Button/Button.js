import React, { Fragment } from "react";
import "./Button.css";
function Button(props) {
	let btncolor = "";
	let btntype = "";
	if (props.color) btncolor = " btn-" + props.color;
	if (props.variant) btntype = " btn-" + props.variant;
	return (
		<Fragment>
			<button className={"cui btn" + btncolor + btntype}>
				{props.children}
			</button>
		</Fragment>
	);
}

export default Button;
