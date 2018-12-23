import React, { Fragment } from "react";
import "./Button.css";
function Button(props) {
	let btncolor = "";
	let btntype = "";
	let btnsize = "";
	if (props.color) btncolor = " btn-" + props.color;
	if (props.variant) btntype = " btn-" + props.variant;
	if (props.size) btnsize = " btn-" + props.size;
	return (
		<Fragment>
			<button className={"cui btn" + btncolor + btntype + btnsize}>
				{props.children}
			</button>
		</Fragment>
	);
}

export default Button;
