import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../pages/LandingPage/category.action";
import { useEffect } from "react";
import { getTotals } from "../../pages/cart-page/cart.slice";
import { fetchProductsAction } from "../../pages/LandingPage/products.action";

import {
  automaticLogin,
  logOutUser,
} from "../login-signupforms/signInUp.action";
const Header = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.customer);
  useEffect(() => {
    dispatch(fetchCategoriesAction());
    dispatch(fetchProductsAction());
    dispatch(getTotals());
    dispatch(automaticLogin());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.category);
  const parentCategories = categories
    .slice()
    .filter((category) => !category.parentCatId);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="success"
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
            <Nav.Link>
              <Link
                to="/products"
                className="text-light"
                style={{ textDecoration: "none", color: "grey" }}
              >
                Our Products
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Categories"
              className="text-light"
              id="collasible-nav-dropdown"
              style={{ color: "white" }}
            >
              {parentCategories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/categories/${category.catName}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {category.catName}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <Nav className="cart">
            <Link to="/cart" className="nav-link">
              <span className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart__length">{cartTotalQuantity}</span>
              </span>
            </Link>
          </Nav>
          <Nav className="search-login">
            <Nav.Link>
              <Form.Control
                type="text"
                placeholder="Search products/categories"
              />
            </Nav.Link>
            <Nav>
              {user.fName ? (
                <div className="d-flex align-items-center">
                  <Link
                    className="nav-link text-light"
                    to="/customer/update-profile"
                  >
                    <i className="fa-solid fa-user"></i>

                    {user.fName}
                  </Link>
                  <Button
                    variant="grey text-light"
                    onClick={() => dispatch(logOutUser())}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </Button>
                </div>
              ) : (
                <Link className="nav-link text-light" to="/shop/securelogin">
                  <div className="login pt-1">
                    <i className="fa-solid fa-user"></i>
                    Login/signin
                  </div>
                </Link>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
