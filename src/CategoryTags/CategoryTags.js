import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const CategoryTags = ({ inputOptions = ["diet soda", "beef", "cleaning products"] }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const renderUnselectedItem = option => (
    <Button
      onClick={() => setSelectedOptions([...selectedOptions, option]) }
      key={`unselected-${option}`}>
      {option}
    </Button>
  )

  const renderSelectedItem = option => (
    <Badge
      key={`selected-${option}`}
      variant="success"
      onClick={() => setSelectedOptions(selectedOptions.filter(e => e !== option )) }>
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
                { renderField(selectedOptions, renderSelectedItem) }
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
            { renderField(inputOptions.filter(option => !selectedOptions.includes(option)), renderUnselectedItem) }
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
