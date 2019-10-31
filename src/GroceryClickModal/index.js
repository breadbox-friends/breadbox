import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const GroceryClickModal = props => (
  <Modal trigger={<Button>{props.children}</Button>} size={'mini'}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <Button>Click me</Button>
    </Modal.Content>
  </Modal>
);

export default GroceryClickModal;
