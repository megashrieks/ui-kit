import React, { useState } from "react";
import "./CustomeInput.css";
function inputHook(defaultvalue, changeWatcher, blurWatcher) {
	const [value, setValue] = useState(defaultvalue);
	return {
		value,
		onChange({ target: { value } }) {
			setValue(value);
			changeWatcher(value);
		},
		onBlur({ target: { value } }) {
			blurWatcher(value);
		}
	};
}

function watchHandler(props) {
	var changeWatcher = () => {};
	var blurWatcher = () => {};
	if (!!props.triggerOnChange) changeWatcher = props.watcher;
	else blurWatcher = props.watcher;
	var input = inputHook("", changeWatcher, blurWatcher);
	return input;
}

function CustomInput(props) {
	var inputProps = watchHandler(props);
	var errorclass = !!props.error ? " error" : "";
	return (
		<label className={"custom-input" + errorclass}>
			<input {...inputProps} />
			<div className="label">{props.label}</div>
			<div className="error-message">{props.errorMessage}</div>
		</label>
	);
}

export { CustomInput };
