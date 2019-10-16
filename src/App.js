import React, { useState } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Container from 'react-bootstrap/Container';

import MainNav from './MainNav/MainNav';
import SignInScreen from './SignInScreen/SignInScreen';
import GroceryItem from './GroceryItem/GroceryItem';
import FuzzySearchBar from './FuzzySearchBar/FuzzySearchBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Mock fetched payload
import mockFetchedItems from './mockPayload';

const SEARCH_OPTIONS = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "title",
    "desc"
  ]
};

function App() {
  const [userSignedIn, setSignIn] = useState(false);
  const [groceryItemList, setGroceryItemList] = useState(mockFetchedItems);

  return userSignedIn ? (
    <React.Fragment>
      <MainNav />
      <Container className='body-container'>
        <Row>
          <Col>
            <FuzzySearchBar
              noInputHandler={() => setGroceryItemList(mockFetchedItems)}
              noMatchesHandler={() => setGroceryItemList([])}
              inputMatchedHandler={searchResult => setGroceryItemList(searchResult)}
              searchSpace={mockFetchedItems}
              searchOptions={SEARCH_OPTIONS}
              inputStatusEventCallback={status => console.log(status)}
            />
          </Col>
        </Row>
        <Row className='grocery-container-row'>
          <Col className='grocery-container-col'>
            {groceryItemList.map(item => (
                <GroceryItem
                  itemTitle={item.title}
                  itemDesc={item.desc}
                  imgUrl={item.img}
                  // replace with item.id in the future
                  key={item.title}
                />
            ))}
          </Col>
        </Row>
      </Container>
      <button
          onClick={() => {
            firebase.auth().signOut();
            setSignIn(false);
          }}
        >Click here to sign-out
      </button>

    </React.Fragment>
  ) : (
    <SignInScreen setSignInState={setSignIn} />
  );
}

export default App;
