import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const SEARCH_OPTIONS = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "title",
    "desc"
  ]
};

const CategoryTags = ({ inputOptions = ["diet soda", "beans", "beef", "cleaning products"] }) => {
  const [unselectedOptions, setUnselectedOptions] = useState(inputOptions);

  const [showModal, setShowModal] = useState(false);

  const renderUnselectedItem = option => (
    <Button
      onClick={() => setUnselectedOptions(unselectedOptions.filter(e => e !== option)) }
      key={`unselected-${option}`}>
      {option}
    </Button>
  )

  const renderSelectedItem = option => (
    <Badge
      key={`selected-${option}`}
      variant="success"
      onClick={() => setUnselectedOptions([...unselectedOptions, option]) }>
      {option}
    </Badge>
  )

  const renderField = (options, renderFn) =>
    [...options]
      .sort()
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
                { renderField(inputOptions.filter(option => !unselectedOptions.includes(option)), renderSelectedItem) }
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
            { renderField(unselectedOptions, renderUnselectedItem) }
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
