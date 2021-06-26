import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Form,
  Row,
  Col,
  Button,
  Modal,
  Alert,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router";
const Styles = styled.div``;
const PasswordChange = (props) => {
  const [user, setUser] = useState({});
  const { password, newpassword, confirmnew } = user;
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();
  const valueChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined
    ) {
      history.goBack();
    }
  }, []);
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
        response = await axios
          .post(`https://grssprojectserver.herokuapp.com/user/changepassword`, data, config)
          .catch((err) => {
            if (err.response) {
              setStatus("Error");
              setError(err.response.data.msg);
              console.log(err.response.data.msg);
            }
          });
        if (
          response != undefined &&
          response.data != undefined &&
          response.statusText === "OK"
        ) {
          setStatus("Success");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="member-header">Change Password</div>
            <br></br>

            <form>
              <div className="member-form">
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Enter Current Password : </label>
                    </Col>
                    <Col>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>New Password : </label>
                    </Col>
                    <Col>
                      <input
                        type="password"
                        name="newpassword"
                        value={newpassword}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Confirm New Password : </label>
                    </Col>
                    <Col>
                      <input
                        type="password"
                        name="confirmnew"
                        value={confirmnew}
                        onChange={valueChanged}
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
                  style={{ float: "right" }}
                  className="member-button"
                  onClick={changePassword}
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <br></br>
    </Styles>
  );
};
export default PasswordChange;
