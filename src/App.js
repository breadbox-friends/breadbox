import React, { useState } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Container from 'react-bootstrap/Container';

import MainNav from './MainNav/MainNav';
import SignInScreen from './SignInScreen/SignInScreen';
import GroceryItem from './GroceryItem/GroceryItem'

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
    }
   ]

  return userSignedIn ? (
    <React.Fragment>
      <MainNav />
      <Container className={'body-container'}>
          {mockFetchItems.map(item => (
              <GroceryItem
                itemTitle={item.title}
                itemDesc={item.desc}
                imgUrl={item.img}
                // replace with item.id in the future
                key={item.title}
              />
          ))}
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
