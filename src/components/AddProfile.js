import React, { useState, useEffect, useRef } from "react";
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
const AddProfile = (props) => {
  const [user, setUser] = useState({});
  const { password, newpassword, confirmnew } = user;

  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const history = useHistory();

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    if (file != undefined) {
      const extension = file.name.split(".").pop();
      if (
        extension === "jpg" ||
        extension === "jpeg" ||
        extension === "bmp" ||
        extension === "png"
      ) {
        setFile(file); // storing file
        setCheckFile(true);
        setStatus("");
      } else {
        setStatus("Warning");
        e.target.value = null;
      }
    }
  };
  const addProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    let formData = new FormData();
    formData.append("file", file);
    try {
      response = await axios
        .post(
          `https://grssprojectserver.herokuapp.com/user/addProfile/${localStorage.getItem(
            "email"
          )}`,
          formData,
          config
        )
        .catch((err) => {
          if (err.response) {
            setStatus("Error");
            setError(err.response.data.msg);
            console.log(err.response.data.msg);
            console.log(err);
          }
        });
      if (
        response != undefined &&
        response.data != undefined &&
        response.statusText === "OK"
      ) {
        setStatus("Success");
        localStorage.removeItem("email");
        if (localStorage.getItem("token") != null) {
          history.goBack();
        } else {
          history.push("/login");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const skip = (e) => {
    localStorage.removeItem("email");
    history.push("/login");
  };
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="member-header">Add Profile Picture</div>
            <br></br>
            <form onSubmit={addProfile}>
              <div className="member-form">
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Add/Update Profile Picture : </label>
                    </Col>
                    <Col>
                      <input type="file" ref={el} onChange={handleChange} />
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
                    Uploaded file format not supported. Please image file!!
                  </Alert>
                ) : null}

                <button
                  type="submit"
                  style={{ float: "right" }}
                  className="member-button"
                >
                  Add
                </button>
                <button
                  className="member-button"
                  style={{ float: "left" }}
                  onClick={skip}
                >
                  Skip
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
export default AddProfile;
