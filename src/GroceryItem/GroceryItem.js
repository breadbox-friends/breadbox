import React from 'react';

const GroceryItem = (props) => {
    return (
        <div>
            <div>{props.itemTitle}</div>
            <div>{props.itemDesc}</div>
        </div>
    )
}

export default GroceryItem;