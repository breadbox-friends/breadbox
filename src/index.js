import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if(!process.env["REACT_APP_OFFLINE_MODE"]) {
  const initFirebase = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDqy-2VOZr7Q8cswR-DAnHfWyie8s915O8",
      authDomain: "breadbox-c329f.firebaseapp.com",
      databaseURL: "https://breadbox-c329f.firebaseio.com",
      projectId: "breadbox-c329f",
      storageBucket: "",
      messagingSenderId: "860032483453",
      appId: "1:860032483453:web:c4219202d9a9e8f041b114",
      measurementId: "G-RXSCH70E6P"
    };

    firebase.initializeApp(firebaseConfig);
  }

  initFirebase();
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
