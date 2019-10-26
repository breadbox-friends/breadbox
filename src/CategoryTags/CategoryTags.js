import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from 'react-bootstrap/Container';
import Fuse from 'fuse.js';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const SEARCH_OPTIONS = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
};

const CategoryTags = ({ inputOptions = ["diet soda", "beans", "beef", "cleaning products"] }) => {
  const [unselectedOptions, setUnselectedOptions] = useState(inputOptions.sort());

  const [userInput, setUserInput] = useState("");

  const [showModal, setShowModal] = useState(false);

  const renderUnselectedItem = option => (
    <Button
      onClick={() => {
        setUnselectedOptions(unselectedOptions.filter(e => e !== option));
        setUserInput("");
      }}
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

  const performSearch = (searchSpace, searchInput) =>
    new Fuse(searchSpace, SEARCH_OPTIONS).search(searchInput);

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
                  value={userInput}
                  onChange={inputEvent => setUserInput(inputEvent.target.value)}
                />
              </Form>
              </Col>
            </Row>
          </Container>
          <hr />
          <div>
            { renderField(
              userInput === '' ?
                unselectedOptions :
                performSearch(unselectedOptions, userInput).map(n => unselectedOptions[n]),
              renderUnselectedItem) }
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
