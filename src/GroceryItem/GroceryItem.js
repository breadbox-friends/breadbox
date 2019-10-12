import React from 'react';
import Card from 'react-bootstrap/Card';

const GroceryItem = (props) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
              <Card.Title>{props.itemTitle}</Card.Title>
              <Card.Text>
                {props.itemDesc}
              </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GroceryItem;