import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Form,
  Container,
  Button,
  ProgressBar,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import PasswordChange from "./PasswordChange";
import { useHistory } from "react-router";
import "./main.css";
const Styles = styled.div``;
const Profile = (e) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    const extension = file.name.split(".").pop();
    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "bmp" ||
      extension === "png"
    ) {
      setFile(file); // storing file
      setCheckFile(true);
    } else {
      setStatus("Warning");
      alert(`${extension} file is not allowed`);
      e.target.value = null;
    }
  };
  const [editable, setEditable] = useState(true);
  const clicked = () => {
    if (editable) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  };
  const [user, setUser] = useState({});
  const {
    first_name,
    last_name,
    role,
    contact,
    email,
    workplace,
    designation,
    about,
    profile,
  } = user;
  const [admin, setAdmin] = useState(false);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };

  const updateUser = async (e) => {
    if (admin) {
      const token = localStorage.getItem("userEmailUpdate");
      if (checkFile) {
        e.preventDefault();
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        let response;
        let formData = new FormData();
        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("role", role);
        formData.append("designation", designation);
        formData.append("workplace", workplace);
        formData.append("email", email);
        formData.append("contact", contact);
        formData.append("about", about);
        formData.append("file", file);

        try {
          response = await axios
            .patch(
              `https://grssprojectserver.herokuapp.com/user/update/${token}`,
              formData,
              config,
              {
                onUploadProgress: (ProgressEvent) => {
                  let progress =
                    Math.round(
                      (ProgressEvent.loaded / ProgressEvent.total) * 100
                    ) + "%";
                  setProgess(progress);
                },
              }
            )
            .catch((err) => {
              if (err.response) {
                setStatus("Error");
                setError(err.response.data.msg);
                console.log(err.response.data.msg);
              }
            });
          if (response.data && response.statusText === "OK") {
            window.location.reload(false);
          }
        } catch (err) {
          console.log(err.request);
          console.log(err.response);
        }
      } else {
        e.preventDefault();
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        let response;
        try {
          console.log(user);
          response = await axios
            .patch(`https://grssprojectserver.herokuapp.com/user/update/${token}`, user, config)
            .catch((err) => {
              if (err.response) {
                setStatus("Error");
                setError(err.response.data.msg);
                console.log(err.response.data.msg);
              }
            });
          if (response.data && response.statusText === "OK") {
            window.location.reload(false);
          }
        } catch (err) {
          console.log(err.response);
          console.log(err.request);
        }
      }
      setEditable(false);
      window.location.reload(false);
    } else {
      const token = localStorage.getItem("token");
      if (checkFile) {
        e.preventDefault();
        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": token,
          },
        };
        let response;
        let formData = new FormData();
        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("role", role);
        formData.append("designation", designation);
        formData.append("workplace", workplace);
        formData.append("email", email);
        formData.append("contact", contact);
        formData.append("about", about);
        formData.append("file", file);

        try {
          response = await axios
            .patch(`https://grssprojectserver.herokuapp.com/user`, formData, config, {
              onUploadProgress: (ProgressEvent) => {
                let progress =
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) + "%";
                setProgess(progress);
              },
            })
            .catch((err) => {
              if (err.response) {
                setStatus("Error");
                setError(err.response.data.msg);
                console.log(err.response.data.msg);
              }
            });
          if (response.data && response.statusText === "OK") {
            window.location.reload(false);
          }
        } catch (err) {
          console.log(err.request);
          console.log(err.response);
        }
      } else {
        e.preventDefault();
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
        let response;
        try {
          console.log(user);
          response = await axios
            .patch(`https://grssprojectserver.herokuapp.com/user`, user, config)
            .catch((err) => {
              if (err.response) {
                setStatus("Error");
                setError(err.response.data.msg);
                console.log(err.response.data.msg);
              }
            });

          if (response.data && response.statusText === "OK") {
            window.location.reload(false);
          }
        } catch (err) {
          console.log(err.response);
          console.log(err.request);
        }
      }
    }
  };
  const token = localStorage.getItem("token");
  let response;
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    if (token === null) {
      history.goBack();
    }
    try {
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user/getrole`, config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    if (response.data.role === "Admin") {
      setAdmin(true);
      if (localStorage.getItem("userEmailUpdate") === null) {
        alert("User Not selected");
        history.goBack();
      } else {
        console.log("UPDATE");
        let temp_config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const temp_response = await axios.get(
            `https://grssprojectserver.herokuapp.com/user/get/${localStorage.getItem(
              "userEmailUpdate"
            )}`,
            temp_config
          );
          setUser(temp_response.data);
          setFile(temp_response.data.profile);
          console.log(temp_response.data);
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      try {
        response = await axios.get(`https://grssprojectserver.herokuapp.com/user`, config);
        setUser(response.data);
        setFile(response.data.profile);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  const [showPasswordModal, setPasswordModal] = useState(false);
  return (
    <Styles>
      <PasswordChange
        show={showPasswordModal}
        closeModal={() => setPasswordModal(false)}
        onHide={() => setPasswordModal(false)}
      />
      <Container className="main-bg">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="member-header">
            <Row>
              <Col>
                {links(profile) != "undefined" ? (
                  <div>
                    <img
                      src={links(profile)}
                      alt={profile}
                      className="profile-img"
                      ></img>
                  </div>
                ) : (
                  <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                )}

                <h2 className="my-4 mx-3">
                  {first_name} {last_name}
                </h2>
              </Col>
              <Row>
                <Col>
                  {!admin ? (
                    <button
                      style={{
                        float: "right",
                      }}
                      className="member-button"
                      onClick={() => setPasswordModal(true)}
                      title="Change Password"
                    >
                      Change<br></br>Password
                    </button>
                  ) : null}
                  <button
                    onClick={clicked}
                    className="member-button"
                    style={{ float: "right" }}
                    title="Edit profile"
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </Col>
              </Row>
            </Row>
          </div>
          <br></br>
          <div class="member-form">
            <div>
              <form onSubmit={updateUser}>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>About</label>
                    </Col>
                    <Col>
                      <textarea
                        required
                        className="textarea"
                        row={30}
                        type="text"
                        name="about"
                        value={about}
                        disabled={editable}
                        onChange={(e) => {
                          setUser({ ...user, about: e.target.value });
                        }}
                      ></textarea>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Contact</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="contact"
                        disabled={editable}
                        value={contact}
                        onChange={(e) => {
                          setUser({ ...user, contact: e.target.value });
                        }}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Work Place</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        disabled={editable}
                        value={workplace}
                        onChange={(e) => {
                          setUser({ ...user, workplace: e.target.value });
                        }}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Designation</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="designation"
                        disabled={editable}
                        value={designation}
                        onChange={(e) => {
                          setUser({ ...user, designation: e.target.value });
                        }}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Upload Profile Picture : </label>
                    </Col>
                    <Col>
                      <input
                        type="file"
                        accept="image*"
                        disabled={editable}
                        ref={el}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                {checkFile && (
                  <ProgressBar now={progress} label={`${progress}%`} />
                )}
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

                <Button
                  onClick={updateUser}
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    "font-size": "2rem",
                    cursor: "pointer",
                  }}
                  className="mt-5 member-button"
                  disabled={editable}
                >
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default Profile;
