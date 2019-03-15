import React from "react";

export function Table(props) {
	return (
		<table className="table table-sm table-light">
			{props.children}
		</table>
	);
};

export function tHead(props) {
	return (
		<thead className="thead-dark">
			<tr>
				<th scope="col">Type</th>
				<th scope="col">Description</th>
				<th scope="col">Location</th>
				<th scope="col">City</th>
				<th scope="col">State</th>
			</tr>
		</thead>
	);
};

export function tBody(props) {
	return (
		<tbody>
			<tr>
				<td>{props.type}</td>
				<td>{props.description}</td>
				<td>{props.location}</td>
				<td>{props.city}</td>
				<td>{props.state}</td>
			</tr>
		</tbody>
	);
};