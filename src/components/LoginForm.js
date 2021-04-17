import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -23px;
  }
  .text {
    color: #dbf1fb;
  }
`;

const Login = (props) => {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  useEffect(async () => {
    if (localStorage.getItem("token") != null) {
      history.push("/");
    }
  }, []);

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
      props.setRoleValue(response.data.roleUser);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <br></br>
          <br></br>
          <div className="display-4 text-center my-5">Login</div>
          <div>
            <Form>
              <Form.Group controlID="login_email">
                <Form.Label>email</Form.Label>
                <Form.Control
                  className="col-xs-4"
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Enter email"
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
              <Button variant="outline-light" onClick={loginClicked}>Login</Button>
            </Form>
            <div className="text">
              Do not have account?
              <a href="/signup">Click here</a> to join!!
            </div>
            <div className="text">
              <a href="/forgotpassword">Forgot password?</a>
            </div>
          </div>
        </Container>
      </div>
    </Styles>
  );
};
export default Login;
