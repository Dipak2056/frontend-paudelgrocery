import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageLayout from "../../components/layouts/LoginPageLayout";
import SignUpForm from "../../components/login-signupforms/SignUpForm";
import "./login.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <LoginPageLayout>
      <div
        className="login--page__body"
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
      >
        <div className="login--page__browsinglink" onClick={() => navigate(-1)}>
          <div className="link nav-link text" style={{ color: "green" }}>
            Back
          </div>
        </div>
        <div className="login--page__formContainer">
          <p className="login--form__header">Let's create your account</p>
          <p className="login--form__signUpSuggestion">
            Already have an account ?{" "}
            <Link to="/shop/securelogin" style={{ color: "green" }}>
              Login here
            </Link>
          </p>
          <div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </LoginPageLayout>
  );
};

export default SignUpPage;
