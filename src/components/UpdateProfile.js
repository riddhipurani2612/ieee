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
const UpdateProfile = (e) => {
  const [user, setUser] = useState({});
  const {
    _id,
    first_name,
    last_name,
    role,
    address,
    contact,
    email,
    workplace,
    designation,
    password,
  } = user;
  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };
  const updateUser = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response;
    try {
      let id = localStorage.getItem("loggedInUserId");
      console.log(user);
      response = await axios.patch(
        `http://localhost:5000/user/${id}`,
        user,
        config
      );
      console.log(response.data);
      alert("data updated");
    } catch (err) {
      console.log(err);
    }
  };
  let response;
  const id = localStorage.getItem("loggedInUserId");
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(async () => {
    try {
      response = await axios.get(`http://localhost:5000/user/${id}`, config);
      setUser(response.data);
      console.log("USER");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div className="display-4 text-center my-5">Profile</div>
          <Form>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                onChange={(e) => {
                  setUser({...user, address: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => {
                  setUser({...user, contact: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setUser({...user, email: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Work Place</Form.Label>
              <Form.Control
                type="text"
                name="workplace"
                value={workplace}
                onChange={(e) => {
                  setUser({...user, workplace: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={designation}
                onChange={(e) => {
                  setUser({...user, designation: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Button onClick={updateUser}>Update</Button>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default UpdateProfile;