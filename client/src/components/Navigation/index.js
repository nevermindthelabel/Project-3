import React from "react";
import "./Nav.css";
import { Nav, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
var moment = require("moment");

let dateAndTime;

export default class Navigation extends React.Component {

  logoutClick = event => {
    event.preventDefault();
    API.users.logout();
  };
  getDateTime = () => {
    dateAndTime = moment().format("MMMM Do YYYY, h:mm a");
  };

  render() {
    this.getDateTime();
    return (
      <Navbar expand="lg" bg="dark" >
        <Navbar.Brand>
          <span className ="text-warning">Traffic</span><span className="text-danger">Mon</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link as="strong">
            <Link to={"/"}>
              <strong>Home</strong>
            </Link>
          </Nav.Link>
          <Nav.Link as="strong">
            <Link to={"/new-user"}>
              <strong>New User</strong>
            </Link>
          </Nav.Link>
          <Nav.Link as="strong">
            <Link to={"/search"}>
              <strong>Search</strong>
            </Link>
          </Nav.Link>
          <Nav.Link as="strong">
            <Link to={"/new-report"}>
              <strong>New Report</strong>
            </Link>
          </Nav.Link>
          <Nav>
            <Button className="right btn btn-primary" size="small" variant="Login">
              <Link to={"/login"}>
                <strong className="text-white">Login</strong>
              </Link>
            </Button>
            <div className="divider" />
            <Button
              className="right btn btn-danger"
              variant="Logout"
              onClick={this.logoutClick}
            >
              <strong>Logout</strong>
            </Button>
          <Navbar.Text className="text-primary ml-2" as="strong">
            <strong>{dateAndTime}</strong>
          </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
