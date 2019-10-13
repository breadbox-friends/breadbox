import React, { useState } from 'react';
import './App.css';
import UserIcon from './UserIcon/UserIcon';

// firebase
import * as firebase from 'firebase';

// component
import SignInScreen from './SignInScreen/SignInScreen';
import GroceryItem from './GroceryItem/GroceryItem'

// boostrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://img.icons8.com/cotton/64/000000/toast--v1.png"
              alt="logo"
            />
            {"Breadbox"}
          </Navbar.Brand>
          <Row>
            <Col className="col-user-icon">
              <UserIcon iconSrc={firebase.auth().currentUser.photoURL} />
            </Col>
            <Col className="col-nav-burger">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Container className={'body-container'}>
          {/* render grocery item */}
          {mockFetchItems.map(item => (
              <GroceryItem 
              itemTitle={item.title} 
              itemDesc={item.desc}
              imgUrl={item.img}
              // replace with item.id in the future
              key={item.title} />
          ))}
      </Container>
      
      {/* dangling here */}
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
