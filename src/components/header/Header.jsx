import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">Paudel grocery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Hot Deals</Nav.Link>
            <Nav.Link href="#products">Our Products </Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fruits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vegetables</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fresh produce
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="search-login">
            <Nav.Link>
              <Form.Control
                type="text"
                placeholder="Search products/ categories"
              />
            </Nav.Link>
            <Nav.Link>
              <div className="login pt-1">
                <i class="fa-solid fa-user"></i>
                Login/signin
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
