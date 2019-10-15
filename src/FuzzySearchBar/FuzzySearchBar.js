import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const FuzzySearchBar = ({ setFuzzyResult, searchSpace }) => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button onClick={() => setFuzzyResult([searchSpace[0]])} variant="outline-success">Search</Button>
    </Form>
  )
}

export default FuzzySearchBar;
