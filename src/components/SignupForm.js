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

const SignUp = () => {
  const [signupData, setSignupData] = useState({});

  const signupValueChanged = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const { name, address, contactno, email } = signupData;

  const next = (e) => {
    console.log(signupData);
  };

  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <div>
            <Form className="text">
            <Form.Group controlID="signup_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  name="name"
                  placeholder="Enter Name"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlID="signup_address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  name="address"
                  placeholder="Enter Name"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlID="signup_contactno">
                <Form.Label>Contact No</Form.Label>
                <Form.Control
                  type="text"
                  value={contactno}
                  name="contactno"
                  placeholder="Enter Name"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlID="login_username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Enter UserName"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Button onClick={next}>
                Next
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </Styles>
  );
};
export default SignUp;
