import React, { useState } from "react";
import { Container, Tabs, Tab, Row, Col, Form, Button } from "react-bootstrap";

function LoginPage() {
  const [key, setKey] = useState("login");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isLoginDisabled = !loginFormData.email || !loginFormData.password;
  const isRegisterDisabled =
    !registerFormData.name ||
    !registerFormData.email ||
    !registerFormData.phone ||
    !registerFormData.age ||
    !registerFormData.password ||
    registerFormData.password !== registerFormData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login or register logic here
  };

  return (
    <Container className="p-3 my-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 btn-tabs"
      >
        <Tab eventKey="login" title="Login">
          <Row className="justify-content-md-center mt-4">
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoginDisabled}
                >
                  Sign In
                </Button>
              </Form>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="register" title="Register">
          <Row className="justify-content-md-center mt-4">
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={registerFormData.name}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={registerFormData.email}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    value={registerFormData.phone}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={registerFormData.age}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={registerFormData.password}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={registerFormData.confirmPassword}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isRegisterDisabled}
                >
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default LoginPage;
