import React from "react";
import { Link } from "react-router-dom";
import "./loginSignupform.css";
const linkStyle = {
  color: "green",
  textDecoration: "underline",
  cursor: "pointer",
};
const LoginForm = () => {
  return (
    <div>
      <form className="loginsignupform">
        <h6 className="py-2">Login details</h6>
        <div className="login--form__email py-2">
          <input type="email" placeholder="Email address" name="email" />
        </div>
        <div className="login--form__password py-2">
          <input type="password" placeholder="password" name="password" />
        </div>
        <Link to="/" style={linkStyle}>
          Forgotten your password?
        </Link>
        <div className="d-flex py-2">
          <input type="checkbox" name="rememberMe" className="checkbox" />{" "}
          Remember me
        </div>
        <button
          className="btn btn-lg btn-success loginbutton mt-2"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
