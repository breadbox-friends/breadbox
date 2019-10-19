import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CategoryTags = () => {
  const [selectedCategories, setCategories] = useState([]);
  const [isSelected, setSelected] = useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setSelected(!isSelected)}>Categories</Button>

      <Modal
        centered
        size="lg"
        show={isSelected}
        onHide={() => setSelected(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
