import React, { useState, setState, useEffect } from "react";
import { Alert, Container, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./main.css";
const Styles = styled.div``;

const Login = (props) => {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") != undefined) {
      history.goBack();
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
      password
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response;
    try {
      response = await axios
        .put("https://grssprojectserver.herokuapp.com/user", data, config)
        .catch((err) => {
          if (err.response) {
            setStatus("Error");
            setError(err.response.data.msg);
          }
        });
      if (response.data && response.statusText === "OK") {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        props.setLogin(true);
        history.push("/");
      }
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
          <div className="member-form">
            <form onSubmit={loginClicked}>
              <Form.Group controlId="login_email">
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
              <Form.Group controlId="login_password">
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

              {status === "Success" ? (
                <Alert variant="success">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                  Data Uploaded Successfully!!
                </Alert>
              ) : null}
              {status === "Error" ? (
                <Alert variant="danger">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  {error}
                </Alert>
              ) : null}
              {status === "Warning" ? (
                <Alert variant="warning">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  Uploaded file format not supported. Please upload only image
                  file
                </Alert>
              ) : null}
              <button
                className="member-button"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  fontSize: "20px",
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
