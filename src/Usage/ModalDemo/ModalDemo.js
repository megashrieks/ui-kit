import React, { Component, Fragment } from "react";
import { ActionModal, Button } from "../../library";
export default class ModalDemo extends Component {
	state = {
		modal: true
	};
	modalClose = () => {
		this.setState(prev => ({
			modal: !prev.modal
		}));
	};
	render() {
		let actions = [
			<Button color="warning" variant="flat" size="small" key="a">
				maybe
			</Button>,
			<Button color="danger" variant="flat" size="small" key="b">
				no
			</Button>,
			<Button
				className="active"
				color="info"
				variant="flat"
				size="small"
				key="c"
			>
				yes
			</Button>
		];
		return (
			<Fragment>
				<Button size="small" onClick={this.modalClose}>
					Open Modal
				</Button>
				{this.state.modal && (
					<ActionModal
						header={"shrikanth is awesome"}
						onClose={this.modalClose}
						actions={actions}
						size="medium"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam.
					</ActionModal>
				)}
			</Fragment>
		);
	}
}
