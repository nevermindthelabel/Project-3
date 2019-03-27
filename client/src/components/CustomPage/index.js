import React from "react";
import TrafficMonMap from '../Map';
import ContainerDiv from "../ContainerDiv";
import "./style.css"

export default function CustomPage(props) {
	return (
		<ContainerDiv>
			Welcome {props.username}!
			<TrafficMonMap />
		</ContainerDiv>
	)
}

//export default CustomPage;