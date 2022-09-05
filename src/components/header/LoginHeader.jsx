import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginHeader = () => {
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
      </Container>
    </Navbar>
  );
};

export default LoginHeader;
