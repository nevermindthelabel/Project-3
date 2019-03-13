import React from 'react';
import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown'

function NewSearchForm(props) {
    
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="search" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        </Form>


    );
}

export default NewSearchForm;