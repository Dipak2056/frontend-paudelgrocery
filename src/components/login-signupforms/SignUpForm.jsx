import React from "react";
import { Link } from "react-router-dom";
import "./loginSignupform.css";
const linkStyle = {
  color: "green",
  textDecoration: "underline",
  cursor: "pointer",
};
const SignUpForm = () => {
  return (
    <div>
      <form className="loginsignupform">
        <h6 className="py-2">Login details</h6>
        <div className="login--form__email py-2">
          <input type="email" placeholder="Email address" name="email" />
        </div>
        <span style={{ fontSize: "0.8em" }}>
          <i className="fa fa-solid fa-info-circle text-primary"></i> we use
          this email address to verify your account.
        </span>
        <div className="login--form__password py-2">
          <input
            type="password"
            placeholder=" Create password"
            name="password"
          />
        </div>
        <hr />
        <h6 className="py-2">Personal details</h6>
        <div className="login--form__email py-2">
          <input type="text" placeholder="First Name" name="fName" required />
        </div>
        <div className="login--form__email py-2">
          <input type="text" placeholder="Last Name" name="lName" required />
        </div>
        <div className="login--form__email py-2">
          <input type="date" placeholder="DD/MM/YY" name="dob" required />
        </div>
        <span style={{ fontSize: "0.8em" }}>
          <i className="fa fa-solid fa-info-circle text-primary"></i> we use
          this to regulate the purchase of restricted products.
        </span>
        <div className="login--form__email py-2">
          <input type="tel" placeholder="Mobile Number" name="phone" />
        </div>
        <span style={{ fontSize: "0.8em" }}>
          <i className="fa fa-solid fa-info-circle text-primary"></i> we use
          this to verify your identity or to update you on your orders.
        </span>
        <button
          className="btn btn-lg btn-success loginbutton mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
