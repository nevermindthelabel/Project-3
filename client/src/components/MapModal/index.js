import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NewReportForm from '../NewReportForm';

let buttonStyle = {
    margin: "20px"
}

export default class MapModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button variant="danger" onClick={this.handleShow} style={buttonStyle}>
                    Create Report
            </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h1>Traffic<span className="text-danger">Mon</span>! Report</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter the information you'd like to report.</Modal.Body>
                   <NewReportForm />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}