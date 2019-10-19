import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class Option {
  constructor(categoryName) {
    this.categoryName = categoryName;
    this.isSelected = false;
  }

  name() {
    return this.categoryName;
  }

  isSelected() {
    return this.isSelected;
  }

  setSelected(isSelected) {
    this.isSelected = isSelected;
  }
}

const CategoryTags = ({ allOptions = ["fish", "beef", "brocolli"]} ) => {
  const [selectedCategories, setCategories] = useState(
    allOptions.map(optionName => new Option(optionName))
  );

  const [showModal, setShowModal] = useState(false);

  const renderCategoryButton = option => (
    <Button key={option.name()}>{option.name()}</Button>
  )

  const renderSelectedTagsField = options =>
    options.map(option => <Badge variant="success" >{option.name()}</Badge>);

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
                { renderSelectedTagsField(selectedCategories) }
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
            { selectedCategories.map(option => renderCategoryButton(option)) }
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
