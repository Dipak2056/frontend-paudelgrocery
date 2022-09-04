import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./loginSignupform.css";
import { signUpUser } from "../../helpers/axioshelper";

const linkStyle = {
  color: "green",
  textDecoration: "underline",
  cursor: "pointer",
};
const initialState = {
  fName: "dipendra",
  lName: "paudel",
  email: "dipendra25@gmail.com",
  dob: "1999-08-01",
  phone: "0452450077",
  password: "dipak1234",
  address: "123 martin street",
};
const SignUpForm = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setError(false);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return setError(true);
    }
    setError(false);
    const { confirmPassword, ...rest } = form;
    const { data } = await signUpUser(rest);
    setResponse(data);
  };

  return (
    <div>
      <form className="loginsignupform" onSubmit={handleOnSubmit}>
        <h6 className="py-2">Login details</h6>
        <div className="login--form__email py-2">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={form.email}
            required
            onChange={handleOnChange}
          />
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
            value={form.password}
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="login--form__password py-2">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            required
            onChange={handleOnChange}
          />
        </div>
        <Alert variant="danger" show={error}>
          password donot match
        </Alert>
        <hr />
        <h6 className="py-2">Personal details</h6>
        <div className="login--form__email py-2">
          <input
            type="text"
            placeholder="First Name"
            name="fName"
            required
            value={form.fName}
            onChange={handleOnChange}
          />
        </div>
        <div className="login--form__email py-2">
          <input
            type="text"
            placeholder="Last Name"
            name="lName"
            value={form.lName}
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="login--form__email py-2">
          <input
            type="date"
            placeholder="DD/MM/YY"
            name="dob"
            value={form.dob}
            onChange={handleOnChange}
          />
        </div>
        <span style={{ fontSize: "0.8em" }}>
          <i className="fa fa-solid fa-info-circle text-primary"></i> we use
          this to regulate the purchase of restricted products.
        </span>
        <div className="login--form__email py-2">
          <input
            type="tel"
            placeholder="Mobile Number"
            name="phone"
            value={form.phone}
            required
            onChange={handleOnChange}
          />
        </div>
        <span style={{ fontSize: "0.8em" }}>
          <i className="fa fa-solid fa-info-circle text-primary"></i> we use
          this to verify your identity or to update you on your orders.
        </span>

        {response && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
            <Link to="/shop/securelogin">Login now</Link>
          </Alert>
        )}
        <input
          className="btn btn-lg btn-success loginbutton mt-3"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
