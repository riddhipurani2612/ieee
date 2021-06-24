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
  const [showPasswordModal, setPasswordModal] = useState(false);
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
      } else {
        setStatus("Warning");
        e.target.value = null;
      }
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
    memberid,
    profile,
  } = user;
  const [admin, setAdmin] = useState(false);
  const [oldemail, setOldmail] = useState("");
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
    e.preventDefault();
    if (admin) {
      const email = localStorage.getItem("userEmailUpdate");
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
      formData.append("memberid", memberid);
      if (oldemail != email) {
        formData.append("changed", "true");
      }
      else {
        formData.append("changed", "false");
      }
      if (file === undefined) {
        formData.append("file", profile);
      } else {
        formData.append("file", file);
      }
      try {
        response = await axios
          .patch(
            `https://grssprojectserver.herokuapp.com/user/update/${email}`,
            formData,
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
            }
          });
        if (response.data && response.statusText === "OK") {
          window.location.reload(false);
        }
      } catch (err) {
        console.log(err.response);
      }
    } else {
      const token = localStorage.getItem("token");
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
      formData.append("memberid", memberid);
      if (oldemail === email) {
        formData.append("changed", "true");
      }
      else {
        formData.append("changed", "false");
      }
      if (file === undefined) {
        formData.append("file", profile);
      } else {
        formData.append("file", file);
      }
      try {
        response = await axios
          .patch(
            `https://grssprojectserver.herokuapp.com/user/update/${email}`,
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
            }
          });
        if (response.data && response.statusText === "OK") {
          window.location.reload(false);
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.goBack();
    } else {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      try {
        let response = await axios.get(
          `https://grssprojectserver.herokuapp.com/user/getrole`,
          config
        );
        if (response.data && response.data.role === "Admin") {
          setAdmin(true);
          if (localStorage.getItem("userEmailUpdate") === null) {
            alert("User Not Selected");
            history.goBack();
          } else {
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
              setOldmail(temp_response.data.email);
              setFile(temp_response.data.profile);
            } catch (err) {
              console.log(err);
            }
          }
        } else {
          try {
            response = await axios.get(`https://grssprojectserver.herokuapp.com/user`, config);
            setUser(response.data);
            setOldmail(response.data.email);
            setFile(response.data.profile);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }, []);
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
                <Form.Group controlId="signup_fisrtname">
                  <Row>
                    <Col sm="4">
                      <label>First name</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="first)name"
                        disabled={editable}
                        value={first_name}
                        onChange={(e) => {
                          setUser({ ...user, first_name: e.target.value });
                        }}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_lastname">
                  <Row>
                    <Col sm="4">
                      <label>Last name</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="last_name"
                        disabled={editable}
                        value={last_name}
                        onChange={(e) => {
                          setUser({ ...user, last_name: e.target.value });
                        }}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Contact No</label>
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
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Email</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="email"
                        disabled={editable}
                        value={email}
                        onChange={(e) => {
                          setUser({ ...user, email: e.target.value });
                        }}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Work Place/University</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        disabled={editable}
                        value={workplace}
                        onChange={(e) => {
                          setUser({ ...user, workplace: e.target.value });
                        }}
                        required
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
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Short Biography</label>
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
                      <label>Member ID</label>
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="memberid"
                        disabled={editable}
                        value={memberid}
                        onChange={(e) => {
                          setUser({ ...user, memberid: e.target.value });
                        }}
                        title="Only numericals allowed"
                        placeholder="Enter IEEE Member ID"
                        pattern="[0-9]+"
                        required
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

                <button
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    "font-size": "2rem",
                    cursor: "pointer",
                  }}
                  className="mt-5 member-button"
                  disabled={editable}
                  type="submit"
                >
                  Update
                </button>
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
