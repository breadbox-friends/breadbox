import React from 'react';
import * as firebase from 'firebase';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import UserIcon from '../UserIcon/UserIcon';
import slowpoke from '../assets/slowpoke.png';
import { renderWithOfflineFallback } from '../utils/offlineFallbacks';
import breadbox from '../assets/breadbox.png';

const MainNav = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={renderWithOfflineFallback(
                "https://img.icons8.com/cotton/64/000000/toast--v1.png",
                breadbox)
              }
          alt="logo"
        />
        {"Breadbox"}
      </Navbar.Brand>
      <Row>
        <Col className="col-user-icon">
          <UserIcon iconSrc={
              renderWithOfflineFallback(() => firebase.auth().currentUser.photoURL, slowpoke)
            }
          />
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
)
export default MainNav;
