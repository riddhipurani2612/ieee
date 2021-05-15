import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Button, Modal } from "react-bootstrap";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -48px;
  }
  .text {
    color: #dbf1fb;
  }
`;
const PasswordChange = (props) => {
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
      const token = localStorage.getItem("token");
      let data = {
        password,
        newpassword,
      };
      console.log(data);
      let response;
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Enter Current Password : </Form.Label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={valueChanged}
            ></input>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password : </Form.Label>
            <input
              type="password"
              name="newpassword"
              value={newpassword}
              onChange={valueChanged}
            ></input>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm New Password : </Form.Label>
            <input
              type="password"
              name="confirmnew"
              value={confirmnew}
              onChange={valueChanged}
            ></input>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={changePassword}>
          Change
        </Button>
        <Button variant="primary" onClick={props.closeModal}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PasswordChange;
