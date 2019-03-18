import React from "react";
import { Table, THead, TBody, TRow } from "../SearchResults";

export default function CustomPage(props) {
	return (<div>
		Welcome {props.username}!
		{/* <Table>
			<THead />
			<TBody>
				{props.reports.map(report => (
					<TRow
						key={report.id}
						type={report.type}
						description={report.description}
						location={report.location}
						city={report.city}
						state={report.state}
					/>
				))}
			</TBody>
		</Table> */}
	</div>)
}

//export default CustomPage;