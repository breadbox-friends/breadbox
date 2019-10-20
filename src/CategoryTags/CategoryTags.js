import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Option from '../models/Option';

const CategoryTags = ({ inputOptions = ["fish", "beef", "brocolli"] }) => {
  const [allOptions, setOptions] = useState(
    inputOptions.map(optionName => new Option(optionName))
  );

  const [showModal, setShowModal] = useState(false);

  const renderOptionsButton = option => (
    <Button
      onClick={() => {
        option.setSelected(!option.isSelected);
        /*
          This works, but I'm forcing a rerender here
          since mutating the object with option.setSelected(!option.isSelected)
          does not trigger an update. Is there a better way to do this?
        */
        setOptions([...allOptions]);
      }}
      key={option.optionName}>
      {option.optionName}
    </Button>
  )

  const renderAllOptionsField = options =>
    options.map(option =>
      (option.isSelected ?
        (
          <Badge key={option.optionName} variant="success" >
            {option.optionName}
          </Badge>
        )
        : null
      )
    )

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
                { renderAllOptionsField(allOptions) }
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
            { allOptions.map(option => renderOptionsButton(option)) }
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
