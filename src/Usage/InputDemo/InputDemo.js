import React, { Component, Fragment } from "react";
import { CustomInput } from "../../library";

export default class InputDemo extends Component {
	state = {
		error: false
	};
	checkNumber = val => {
		this.setState({ error: !!val.length });
	};
	render() {
		return (
			<Fragment>
				<CustomInput
					label="Name"
					defaultValue="abc"
					watcher={this.checkNumber}
					triggerOnChange={false}
					error={this.state.error}
					errorMessage={"Error"}
				/>
			</Fragment>
		);
	}
}
