import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Option, { optionSort } from '../models/Option';

const CategoryTags = ({ inputOptions = ["diet soda", "beef", "cleaning products"] }) => {
  const [allOptions, setOptions] = useState(
    inputOptions.map(optionName => new Option(optionName)).sort(optionSort)
  );

  const [showModal, setShowModal] = useState(false);

  const renderUnselectedItem = option => (
    <Button
      onClick={() => {
        setOptions([
          ...allOptions.filter(o => o.optionName !== option.optionName),
          option.setSelected(!option.isSelected)
        ]);
      }}
      key={`unselected-${option.optionName}`}>
      {option.optionName}
    </Button>
  )

  const renderSelectedItem = option => (
    <Badge
      key={`selected-${option.optionName}`}
      variant="success"
      onClick={() => {
        setOptions([
          ...allOptions.filter(o => o.optionName !== option.optionName),
          option.setSelected(!option.isSelected)
        ]);
      }}>
      {option.optionName}
    </Badge>
  )

  const renderUnselectedField = options =>
    renderField(options, o => !o.isSelected, renderUnselectedItem);

  const renderSelectedField = options =>
    renderField(options, o => o.isSelected, renderSelectedItem);

  const renderField = (options, filterFn, renderFn) =>
    [...options]
      .filter(filterFn)
      .sort(optionSort)
      .map(renderFn);

  return (
    <React.Fragment>
      <Button onClick={() => setShowModal(!showModal)}>Categories</Button>
      <Modal
        centered
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>What are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                { renderSelectedField(allOptions) }
              </Col>
              <Col>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Form>
              </Col>
            </Row>
          </Container>
          <hr />
          <div>
            { renderUnselectedField(allOptions) }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default CategoryTags;
