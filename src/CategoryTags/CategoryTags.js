import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const CategoryTags = ({ allOptions = ["fish", "beef", "brocolli"]} ) => {
  const [selectedCategories, setCategories] = useState([]);
  const [isSelected, setSelected] = useState(false);

  const renderCategoryButton = category => (
    <Button key={category}>{category}</Button>
  )

  const renderSelectedTagsField = categories =>
    categories.map(category => <Badge variant="success" >{category}</Badge>);

  return (
    <React.Fragment>
      <Button onClick={() => setSelected(!isSelected)}>Categories</Button>
      <Modal
        centered
        size="lg"
        show={isSelected}
        onHide={() => setSelected(false)}>
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
            { allOptions.map(category => renderCategoryButton(category)) }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelected(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setSelected(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default CategoryTags;
