import React, { useState, setState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./main.css";
const Styles = styled.div``;

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
      response = await axios.put("https://grssprojectserver.herokuapp.com/user", data, config);
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
      <Container className="main-bg">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="member-header">Login</div>
          <br></br>
          <div class="member-form">
            <form onSubmit={loginClicked}>
              <Form.Group controlID="login_email">
                <Row>
                  <Col sm="4">
                    <label>Email</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      value={email}
                      name="email"
                      placeholder="Enter email"
                      onChange={valueChange}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlID="login_password">
                <Row>
                  <Col sm="4">
                    <label>Password</label>
                  </Col>
                  <Col>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter password"
                      onChange={valueChange}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <button
                className="member-button"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  "font-size": "20px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
            <div className="text">
              Do not have account?<br></br>
              <a href="/signup">Click here</a> to join!!
            </div>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default Login;
