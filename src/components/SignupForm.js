import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
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

  const {
    fname,
    lname,
    role,
    address,
    contactno,
    email,
    workplace,
    designation,
  } = signupData;

  const next = (e) => {
    console.log(signupData);
  };

  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <br></br>
        <div className="display-4 text-center my-5">Sign Up</div>
          <div>
            <Form className="text">
              <Form.Group controlId="signup_fisrtname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  value={fname}
                  name="fname"
                  placeholder="Enter first name"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  value={lname}
                  name="lname"
                  placeholder="Enter last name"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Choose role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  value={role}
                  onChange={signupValueChanged}
                >
                  <option selected="true">--Select--</option>
                  <option>Student</option>
                  <option>Professional Member</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  name="address"
                  placeholder="Enter Address"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_contactno">
                <Form.Label>Contact No</Form.Label>
                <Form.Control
                  type="text"
                  value={contactno}
                  name="contactno"
                  placeholder="+91-**********"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  name="email"
                  placeholder="example@xzy.com"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_workplace">
                <Form.Label>Work_Place/University</Form.Label>
                <Form.Control
                  type="text"
                  value={workplace}
                  name="workplace"
                  placeholder="Enter work place"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  value={designation}
                  name="designation"
                  placeholder="Enter designation"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Button onClick={next}>Next</Button>
              
            </Form>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default SignUp;
