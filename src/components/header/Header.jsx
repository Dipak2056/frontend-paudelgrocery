import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../pages/LandingPage/category.action";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, []);
  const { categories } = useSelector((state) => state.category);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar fixed-top"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Paudel grocery
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/hot-deals">Hot Deals</Nav.Link>
            <Nav>
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "grey" }}
              >
                Our Products
              </Link>
            </Nav>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/products/`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
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
                <i className="fa-solid fa-user"></i>
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
