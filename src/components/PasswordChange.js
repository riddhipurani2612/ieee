import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Button } from "react-bootstrap";
import Error from "./Error.js";

const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -48px;
  }
  .text {
    color: #dbf1fb;
  }
`;
const PasswordChange = (e) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  let {
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
    currentpassword,
    newpassword,
    confirmnew,
  } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const updateUser = async (e) => {
    e.preventDefault();
    console.log(currentpassword);
    console.log(newpassword);
    if (currentpassword == password) {
      if (newpassword != confirmnew) {
        alert("New Password does not match");
      } else {
        setUser({...user, password : newpassword});
        console.log(password);
      }
    } else {
      alert("Please enter current password right");
    }
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
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
    }
    let response;
    try {
      let id = localStorage.getItem("loggedInUserId");
      response = await axios.patch(
        `http://localhost:5000/user/${id}`,
        user,
        config
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data);
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
              <Form.Label>Enter Current Password : </Form.Label>
              <Form.Control
                type="password"
                name="currentpassword"
                value={currentpassword}
                onChange={(e) => {
                  setUser({ ...user, currentpassword: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>New Password : </Form.Label>
              <Form.Control
                type="password"
                name="newpassword"
                value={newpassword}
                onChange={(e) => {
                  setUser({ ...user, newpassword: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm New Password : </Form.Label>
              <Form.Control
                type="password"
                name="confirmnew"
                value={confirmnew}
                onChange={(e) => {
                  setUser({ ...user, confirmnew: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <div className="inlineForm__notif">
              {error && <Error error={error.messages} />}
            </div>
            <Button onClick={updateUser}>Update</Button>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default PasswordChange;
