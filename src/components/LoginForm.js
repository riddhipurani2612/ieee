import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
    height: 100vh;
  }
  .text {
    color: white;
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({});

  const valueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  const loginClicked = (e) => {
    console.log(formData);
  };

  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <div>
            <Form>
              <Form.Group controlID="login_username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Enter UserName"
                  onChange={valueChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlID="login_password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={valueChange}
                ></Form.Control>
              </Form.Group>
              <Button onClick={loginClicked}>Login</Button>
            </Form>
            <div className="text">
                Do not have account? <a href="/signup" >Click here</a> to join!!
            </div>
          </div>
        </Container>
      </div>
    </Styles>
  );
};
export default Login;
