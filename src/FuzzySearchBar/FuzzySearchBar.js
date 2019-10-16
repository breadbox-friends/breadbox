import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Fuse from 'fuse.js';

const STATUS_NO_INPUT = {status: 'NO_INPUT'};
const STATUS_NO_MATCHES = {status: 'NO_MATCHES'};
const STATUS_INPUT_MATCHED = {status: 'INPUT_MATCHED'};

const FuzzySearchBar = ({
  noInputHandler,
  noMatchesHandler,
  inputMatchedHandler,
  searchSpace,
  searchOptions,
  inputStatusEventCallback = f => f
}) => {

  const performSearch = searchInput =>
    new Fuse(searchSpace, searchOptions).search(searchInput);

  const handleChange = inputEvent => {
    inputEvent.preventDefault();

    const inputValue = inputEvent.target.value;
    const result = performSearch(inputEvent.target.value);

    if(inputValue === '') {
      inputStatusEventCallback(STATUS_NO_INPUT)
      return noInputHandler(result);
    } else if (result.length === 0) {
      inputStatusEventCallback(STATUS_NO_MATCHES)
      return noMatchesHandler(result)
    } else {
      inputStatusEventCallback(STATUS_INPUT_MATCHED)
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
