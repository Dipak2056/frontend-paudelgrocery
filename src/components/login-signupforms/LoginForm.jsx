import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { loginUser } from "../../helpers/axioshelper";
import "./loginSignupform.css";
const linkStyle = {
  color: "green",
  textDecoration: "underline",
  cursor: "pointer",
};
const initialState = {
  email: "dipendra25@gmail.com",
  password: "dipak1234",
};
const initialResponse = {
  status: "error",
  message: "Invalid Login Credentials.",
};
const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [response, setResponse] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    setResponse();
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(form);
    data ? navigate("/") : setResponse(initialResponse);
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
            required
            onChange={handleOnChange}
            value={form.email}
          />
        </div>
        <div className="login--form__password py-2">
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            onChange={handleOnChange}
            value={form.password}
          />
        </div>
        <Link to="/" style={linkStyle}>
          Forgotten your password?
        </Link>
        <div className="d-flex py-2">
          <input type="checkbox" name="rememberMe" className="checkbox" />{" "}
          Remember me
        </div>
        {response && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
        <input
          className="btn btn-lg btn-success loginbutton mt-2"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
