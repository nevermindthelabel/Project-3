import React from "react";
import "./Nav.css";
import LoginDialog from '../LoginDialog'
import { Nav, Button, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class Navigation extends React.Component {
    loginDialog = React.createRef()
    handleLoginClick = () => {
        this.loginDialog.current.show()
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">TrafficMon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link as="strong"><Link to={"/"}><strong>Home</strong></Link></Nav.Link>
                    <Nav.Link href="New User">New User</Nav.Link>
                    <Nav.Link href="#Search">Search</Nav.Link>
                    <Nav.Link as="strong"><Link to={"/new-report"}><strong>New Report</strong></Link></Nav.Link>
                    <Nav.Link href="#View Own Reports">View Own Reports</Nav.Link>
                    <nav>
                        <Button variant="Login" onClick={this.handleLoginClick}>Login</Button>
                        <Button variant="Logout">Logout</Button>
                    </nav>
                </Navbar.Collapse>
                <LoginDialog ref={this.loginDialog} />
            </Navbar>
        )
    }
}

