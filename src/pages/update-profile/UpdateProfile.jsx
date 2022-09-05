import React, { useState } from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import userImage from "../../images/user.png";

import { Form, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const initialState = {
  fName: "",
  lName: "",
  address: "",
  phone: "",
  email: "",
};
const UpdateProfile = () => {
  const { user } = useSelector((state) => state.customer);
  const [formData, setFormData] = useState(initialState);
  const [showEditForm, setEditForm] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleOnEditClick = () => {
    setEditForm(!showEditForm);
  };

  return (
    <DefaultLayout>
      <div className="mt-5 p-3">
        <div className="container mt-5">
          <Card style={{ width: "100%" }} sx={{ maxWidth: 600 }}>
            <Card.Body>
              <div className="content d-flex align-items-center">
                <div className="left-view w-25">
                  <Card.Img className="fluid" src={userImage} />
                </div>
                <div className="right-view">
                  <h5>
                    <i className="fa-solid fa-user text-success"></i>
                    Name: {user.fName} {user.lName} <span></span>
                  </h5>

                  <h5>
                    <i className="fa-solid fa-envelope"></i>Email: {user.email}{" "}
                    <span></span>
                  </h5>
                  <h5>
                    <i className="fa-solid fa-mobile"></i>
                    Mobile: {user.phone} <span></span>
                  </h5>
                  <h5>
                    <i className="fa-solid fa-address-book"></i>Address:{" "}
                    <span>{user.address}</span>
                  </h5>
                  <div className="container">
                    {!showEditForm && (
                      <Button
                        variant="warning"
                        className="m-1"
                        onClick={handleOnEditClick}
                      >
                        Edit
                      </Button>
                    )}

                    <Button variant="danger" className="m-1">
                      <i className="fa-solid fa-right-from-bracket"></i>
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        {showEditForm ? (
          <div className="container mt-5">
            <Card className="p-1">
              <Form className="m-auto" onSubmit={handleOnSubmit}>
                <h1>
                  Update personal details of {user.fName} {user.lName}
                </h1>
                <Form.Group className="mb-3" controlId="formBasicfName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="text"
                    name="fName"
                    placeholder={user.fName}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiclName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="text"
                    required
                    name="lName"
                    placeholder={user.lName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="email"
                    required
                    name="email"
                    placeholder={user.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="text"
                    required
                    name="address"
                    placeholder={user.address}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>mobile</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="tel"
                    name="phone"
                    required
                    placeholder={user.phone}
                  />
                </Form.Group>

                <Button variant="success btn btn-lg w-100" type="submit">
                  Update
                </Button>
              </Form>
            </Card>
          </div>
        ) : (
          ""
        )}
      </div>
    </DefaultLayout>
  );
};

export default UpdateProfile;
