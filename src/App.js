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

function App() {
  const [userSignedIn, setSignIn] = useState(false);
  const mockFetchItems = [
    {
      title: 'Apple Watermelon',
      desc: 'Watermelon flavoured apple!',
      img: 'https://img.icons8.com/dusk/64/000000/unicorn.png'
    },
    {
      title: 'Lemon Water',
      desc: 'Water flavoured lemon!',
      img: 'https://img.icons8.com/color/64/000000/fenix.png'
    },
    {
      title: 'Apple Watermelon',
      desc: 'Watermelon flavoured apple!',
      img: 'https://img.icons8.com/dusk/64/000000/unicorn.png'
    },
    {
      title: 'Lemon Water',
      desc: 'Water flavoured lemon!',
      img: 'https://img.icons8.com/color/64/000000/fenix.png'
    },
    {
      title: 'Apple Watermelon',
      desc: 'Watermelon flavoured apple!',
      img: 'https://img.icons8.com/dusk/64/000000/unicorn.png'
    },
    {
      title: 'Lemon Water',
      desc: 'Water flavoured lemon!',
      img: 'https://img.icons8.com/color/64/000000/fenix.png'
    },
    {
      title: 'Lemon Water',
      desc: 'Water flavoured lemon!',
      img: 'https://img.icons8.com/color/64/000000/fenix.png'
    },
   ]

  return userSignedIn ? (
    <React.Fragment>
      <MainNav />
      <Container className='body-container'>
        <Row>
          <Col>
            <FuzzySearchBar />
          </Col>
        </Row>
        <Row className='grocery-container-row'>
          <Col className='grocery-container-col'>
            {mockFetchItems.map(item => (
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
