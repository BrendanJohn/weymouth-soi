
import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ subtitle }) => (
   <div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand href="#home">
          <img id="main-logo"  className="card-img-top contactCard" src="./images/logo.jpg" alt="main logo">
            </img> Weymouth Sons of Italy
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
);



export default Header;