import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const CategoryTags = ({ allOptions = ["fish", "beef", "brocolli"]} ) => {
  const [selectedCategories, setCategories] = useState([]);
  const [isSelected, setSelected] = useState(false);

  const renderCategoryButton = category => (
    <Button key={category}>{category}</Button>
  )

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
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
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
