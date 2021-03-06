import React from 'react';
import { Form, Button } from 'react-bootstrap';
import TypeAhead from '../TypeAhead';
import './style.css';
import ContainerDiv from '../ContainerDiv';
const cityList = require('../../resources/index');

const ReportSearchForm = ({ onChange, onTypeaheadChange, onClick }) => {
  return (
    <ContainerDiv>
      <Form className="mb-5">
        <TypeAhead name="city" options={cityList} onChange={onTypeaheadChange} />
        <Form.Group controlId="searchForm.StateSelect">
          <Form.Label>Select State to search by State</Form.Label>
          <Form.Control name="state" onChange={onChange} placeholder="Select State" as="select">
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>Washington DC</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
          </Form.Control>
        </Form.Group>
        <Button className="float-right" onClick={onClick} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </ContainerDiv>
  );
};

export default ReportSearchForm;
