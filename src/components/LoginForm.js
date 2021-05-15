import React, { useState, setState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
  .main-bg {
    background: #084c61;
  }
  .text {
    color: white;
  }
  .content {
    max-width: 500px;
    margin: auto;
    padding: 50px;
  }
`;

const Login = (props) => {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const valueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { email, password } = formData;
  const loginClicked = async (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response;
    try {
      response = await axios.put("http://localhost:5000/user", data, config);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      props.setLogin(true);
      history.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      <Container className="main-bg text">
        <div
          className="display-3 text-center"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Login
        </div>
        <br></br>
        <div className="content w3-panel w3-border w3-border-white">
          <Form>
            <Form.Group controlID="login_email">
              <Form.Label>email</Form.Label>
              <input
                class="w3-input w3-animate-input"
                type="text"
                value={email}
                name="email"
                placeholder="Enter email"
                onChange={valueChange}
              ></input>
            </Form.Group>
            <Form.Group controlID="login_password">
              <Form.Label>Password</Form.Label>
              <input
                class="w3-input w3-animate-input"
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={valueChange}
              ></input>
            </Form.Group>
            <Button
              onClick={loginClicked}
              variant="outline-light"
              style={{
                width: "100%",
                padding: "14px 28px",
                "font-size": "20px",
                cursor: "pointer",
              }}
            >
              Login
            </Button>
          </Form>
          <div className="text">
            Do not have account?
            <a href="/signup">Click here</a> to join!!
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default Login;
