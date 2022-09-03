import React from "react";
import { Link } from "react-router-dom";
import LoginPageLayout from "../../components/layouts/LoginPageLayout";
import LoginForm from "../../components/login-signupforms/LoginForm";
import "./login.css";

const Loginpage = () => {
  return (
    <LoginPageLayout>
      <div
        className="login--page__body"
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
      >
        <div className="login--page__browsinglink">
          <Link className="nav-link text" style={{ color: "green" }} to="/">
            Continue browsing
          </Link>
        </div>
        <div className="login--page__formContainer">
          <p className="login--form__header">Please log in to shop</p>
          <p className="login--form__signUpSuggestion">
            New to Paudel Groceries?
            <Link to="/shop/signup/one-login" style={{ color: "green" }}>
              Sign up here
            </Link>
          </p>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </LoginPageLayout>
  );
};

export default Loginpage;
