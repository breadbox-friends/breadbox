import React from 'react';

const GroceryItem = (props) => {
    return (
        <div>
            <div>Card Title!!!</div>
            <div>{props.itemDesc}</div>
        </div>
    )
}

export default GroceryItem;