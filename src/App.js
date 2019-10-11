import React, { useState } from 'react';
import * as firebase from 'firebase';
import './App.css';
import SignInScreen from './SignInScreen/SignInScreen';
import GroceryItem from './GroceryItem/GroceryItem'

function App() {
  const [userSignedIn, setSignIn] = useState(false);

  return userSignedIn ? (
    <div className="App">
      <h1>{`Welcome to BreadBox, ${firebase.auth().currentUser.displayName}`}</h1>
      <header className="App-header">
        <img src={firebase.auth().currentUser.photoURL} className="App-logo" alt="logo" />
      </header>
      <button onClick={() => {
          firebase.auth().signOut();
          setSignIn(false);
        }
      }>Click here to sign-out</button>

      <div>
        <GroceryItem itemDesc='card description yo'/>
      </div>
        
    </div>
  ) : (
    <SignInScreen
      setSignInState={ setSignIn }
    />
  )
}

export default App;
