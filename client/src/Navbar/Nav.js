import React from "react";
import "./Nav.css";
import { Navbar } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


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

    class MyVerticallyCenteredModal extends React.Component {
        render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
        Login
          </Modal.Title>
            </Modal.Header>
    <Modal.Body>
        <h4>Login</h4>7
                <Form>
            <Form.Group controlId="formBasicUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="Username" placeholder="Username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
        </Modal>
            );
          }
        }
    
class App extends React.Component {
        constructor(...args) {
            super(...args);
    
        this.state = {modalShow: false };
        }
    
    render() {
         let modalClose = () => this.setState({modalShow: false });
       
                return (
            <ButtonLogin>
                <Button
                    variant="primary"
                    onClick={() => this.setState({ modalShow: true })}
                >
                    Launch vertically centered modal
        </Button>

                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
            </ButtonLogin>
            );
        }
    }
    
render(<App />);
</Navbar >;