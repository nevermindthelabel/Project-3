import React from "react";
//import { Link } from "react-bootstrap";
import './style.css'


function NotLoggedIn(props) {
	return (
		<div className="jumbotron">
			<div className="container">
				<div className="row">
					<h1 className="display-4">Not Logged In</h1>
					<p className="lead">Sorry! You have to be logged in in order to use this feature</p>
					<hr className="my-4" />
					<p>Please login to submit reports</p>
						<div className="lead">
						<br />
							<a className="btn btn-primary btn-lg" href="/login" role="button">Login</a>
							<div className="divider" />
							<a className="btn btn-primary btn-lg" href="/new-user" role="button">Create an Account</a>
						</div>
				</div>
			</div>
		</div>
	)
}

export default NotLoggedIn;