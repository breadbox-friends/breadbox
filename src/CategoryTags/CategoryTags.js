import React, { useState } from 'react';
import Button from "react-bootstrap/Button"

const CategoryTags = () => {
  const [selectedCategories, setCategories] = useState([]);
  const [isSelected, setSelected] = useState(false);

  console.log("11:35 pm: isSelected", isSelected);
  return (
    <React.Fragment>
      <Button onClick={() => setSelected(!isSelected)}>Categories</Button>
    </React.Fragment>
  )
}

export default CategoryTags;
