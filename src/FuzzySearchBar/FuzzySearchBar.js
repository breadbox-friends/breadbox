import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Fuse from 'fuse.js';

const FuzzySearchBar = ({ setSearchResult, searchSpace, searchOptions }) => {

  const performSearch = () =>
    new Fuse(searchSpace, searchOptions).search("cheddar");

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button onClick={() => setSearchResult(performSearch())} variant="outline-success">Search</Button>
    </Form>
  )
}

export default FuzzySearchBar;
