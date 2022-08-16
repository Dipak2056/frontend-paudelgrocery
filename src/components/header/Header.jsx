import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar fixed-top"
    >
      <Container>
        <Navbar.Brand href="/">Paudel grocery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/hot-deals">Hot Deals</Nav.Link>
            <Nav.Link href="/products">Our Products </Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/products/fruits">
                Fruits
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/vegetables">
                Vegetables
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/fresh-produce">
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
          <Nav className="cart">
            <Link to="/cart">
              <span className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart__length">12</span>
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
