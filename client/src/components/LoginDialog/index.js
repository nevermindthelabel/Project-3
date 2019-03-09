import React from "react"
import { Button, Form, Modal } from 'react-bootstrap';

export default class LoginDialog extends React.Component {
    state = {
        visible: false
    }
    hide = () => this.setState({ visible: false })
    show = () => this.setState({ visible: true })
    render() {
        if (!this.state.visible) {
            return null
        }
        return (
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Login</h4>
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onLogin}>Login</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


