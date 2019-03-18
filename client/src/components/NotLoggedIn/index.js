import React from "react";
//import { Link } from "react-bootstrap";

function NotLoggedIn(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Not Logged In</h1>
			<p className="lead">Sorry! You have to be logged in in order to submit a report!</p>
			<hr className="my-4" />
			<p>Please login to submit reports</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="/login" role="button">Login</a>
			</p>
		</div>
	)
}

export default NotLoggedIn;