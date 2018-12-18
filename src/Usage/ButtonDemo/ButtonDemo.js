import React from "react";
import { Button } from "../../library";
export default function ButtonDemo() {
	let colors = [null, "danger", "success", "info", "warning"];
	let variant = [null, "flat"];
	return (
		<table className="demo-table">
			<tbody>
				{variant.map((element, index) => {
					return (
						<tr key={index}>
							<td>
								<div className="demo-column head">
									{element ? element : "Default"}
								</div>
							</td>
							{colors.map((e, i) => {
								return (
									<td key={i}>
										<div className="demo-column">
											<Button variant={element} color={e}>
												{e ? e : "Default"}
											</Button>
										</div>
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
