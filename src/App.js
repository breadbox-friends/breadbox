import React, { useState } from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase';
import './App.css';
import SignInScreen from './SignInScreen/SignInScreen';

function App() {
  const [userSignedIn, setSignIn] = useState(false);

  return userSignedIn ? (
    <div className="App">
      <h1>{`Welcome to BreadBox, ${firebase.auth().currentUser.displayName}`}</h1>
      <header className="App-header">
        <img src={firebase.auth().currentUser.photoURL} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => {
          firebase.auth().signOut();
          setSignIn(false);
        }
      }>Click here to sign-out</button>
    </div>
  ) : (
    <SignInScreen
      setSignInState={ setSignIn }
    />
  )
}

export default App;
