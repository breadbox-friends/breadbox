import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Fuse from 'fuse.js';

const FuzzySearchBar = ({ setSearchResult, searchSpace, searchOptions }) => {

  const performSearch = searchInput =>
    new Fuse(searchSpace, searchOptions).search(searchInput);

  const handleChange = inputEvent => {
    inputEvent.preventDefault();
    const result = performSearch(inputEvent.target.value);
    setSearchResult(result.length === 0 ? searchSpace : result)
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
