import React, { useState } from 'react';
import * as firebase from 'firebase';
import './App.css';
import SignInScreen from './SignInScreen/SignInScreen';
import GroceryItem from './GroceryItem/GroceryItem'

function App() {
  const [userSignedIn, setSignIn] = useState(false);
  const mockFetchItems = [ 
    {
      title: 'Apple Watermelon',
      desc: 'Watermelon flavoured apple!'
    },
    {
      title: 'Lemon Water',
      desc: 'Water flavoured lemon!'
    }
   ]

  return userSignedIn ? (
    <div className="App">
      <h1>{`Welcome to BreadBox, ${firebase.auth().currentUser.displayName}`}</h1>
      <header>
        <img src={firebase.auth().currentUser.photoURL} className="App-logo" alt="logo" />
      </header>
      <button onClick={() => {
          firebase.auth().signOut();
          setSignIn(false);
        }
      }>Click here to sign-out</button>


      <div>
        { 
          mockFetchItems.map(item => (
            <GroceryItem 
              itemTitle={item.title}
              itemDesc={item.desc}/>
          ))
        }
      </div>
        
    </div>
  ) : (
    <SignInScreen
      setSignInState={ setSignIn }
    />
  )
}

export default App;
