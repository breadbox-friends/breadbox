import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Fuse from 'fuse.js';

const FuzzySearchBar = ({
  noInputHandler,
  noMatchesHandler,
  inputMatchedHandler,
  searchSpace,
  searchOptions
}) => {

  const performSearch = searchInput =>
    new Fuse(searchSpace, searchOptions).search(searchInput);

  const handleChange = inputEvent => {
    inputEvent.preventDefault();

    const inputValue = inputEvent.target.value;
    const result = performSearch(inputEvent.target.value);

    if(inputValue === '') {
      return noInputHandler(result);
    } else if (result.length === 0) {
      return noMatchesHandler(result)
    } else {
      return inputMatchedHandler(result)
    }
  }

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={inputEvent => handleChange(inputEvent)}
      />
    </Form>
  )
}

export default FuzzySearchBar;
