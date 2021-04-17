import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Button } from "react-bootstrap";

const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -48px;
  }
  .text {
    color: #dbf1fb;
  }
`;
const ProfileView = (e) => {
  const [user, setUser] = useState({});
  const {
    first_name,
    last_name,
    contact,
    email,
    workplace,
    designation,
    about,
  } = user;
  let response;
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token" : token,
    },
  };
  useEffect(async () => {
    try {
      response = await axios.get(`http://localhost:5000/user/`, config);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg text">
          <div className="display-4 text-center my-5">Profile</div>
          <Form>
            <Form.Group>
              <Form.Label>First Name : {first_name}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name : {last_name}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact : {contact}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email : {email}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Work Place : {workplace}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation : {designation}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>About : {about}</Form.Label>
            </Form.Group>
          </Form>
      </Container>
    </Styles>
  );
};
export default ProfileView;
