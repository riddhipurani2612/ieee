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
const PasswordChange = (e) => {
  const [user, setUser] = useState({});
  const { password, newpassword, confirmnew } = user;
  const valueChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const changePassword = async (e) => {
    e.preventDefault();
    if (newpassword != confirmnew) {
      alert("doesn't match");
    } else {
      const _id = localStorage.getItem("loggedInUserId");
      let data = {
        _id,
        password,
        newpassword,
      };
      console.log(data);
      let response;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };    
      try {
        response = await axios.post(
          `http://localhost:5000/user/changepassword`,
          data,
          config
        );
        console.log(response.data);
          alert("Changed");
      } catch (error) {
        console.log(error);
      }
    }
  };
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
                name="password"
                value={password}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>New Password : </Form.Label>
              <Form.Control
                type="password"
                name="newpassword"
                value={newpassword}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm New Password : </Form.Label>
              <Form.Control
                type="password"
                name="confirmnew"
                value={confirmnew}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <div className="inlineForm__notif"></div>
            <Button onClick={changePassword}>Update</Button>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default PasswordChange;
