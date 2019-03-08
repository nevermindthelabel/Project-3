import React from "react";
import "./Nav.css";


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">TrafficMon</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="New User">New User</Nav.Link>
        <Nav.Link href="#Search">Search</Nav.Link>
        <Nav.Link href="#New Report">New Report</Nav.Link>
        <Nav.Link href="#View Own Reports">View Own Reports</Nav.Link>
        <nav>
            <Button variant="Login">Login</Button>
            <Button variant="Logout">Logout</Button>
        </nav>
    </Navbar.Collapse>
</Navbar>;