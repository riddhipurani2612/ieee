import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form } from "react-bootstrap";

const Styles = styled.div`
.main-bg {
  background-color: #084C61;
  margin-top: -23px;
}
.text {
  color: #dbf1fb;
}
`;
const Profile = (e) => {
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
    } catch (error) {
      console.log(error);
    }
  });
  const username = {
    first_name: response.data.first_name,
    last_name: response.data.last_name,
    role: response.data.role,
    address: response.data.address,
    contact: response.data.contact,
    email: response.data.email,
    workplace: response.data.workplace,
    designation: response.data.designation,
  };
  return (
    <Styles>
      <div className="main-bg text">
        <Form>
          <Form.Group controlID="login_email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="col-xs-4"
              type="text"
              value=""
              name="email"
              placeholder=""
              disabled
            ></Form.Control>
          </Form.Group>
        </Form>
      </div>
    </Styles>
  );
};

export default Profile;
