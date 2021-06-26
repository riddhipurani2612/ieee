import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Form,
  Container,
  Dropdown,
  ProgressBar,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import AddDetailedBiography from "./AddDetailedBiography";
import { useHistory } from "react-router";
import "./main.css";
const Styles = styled.div``;
const Profile = (e) => {
  const [showProfileModal, setProfileModal] = useState(false);
  const [name, setName] = useState("");
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
      if (extension === "pdf") {
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
    detailedbio,
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
      formData.append("contact", contact);
      formData.append("about", about);
      formData.append("memberid", memberid);
      formData.append("email", email);
      if (file === undefined) {
        formData.append("file", detailedbio);
      } else {
        formData.append("file", file);
      }
      try {
        response = await axios
          .patch(`https://grssprojectserver.herokuapp.com/user/update/${email}`, formData, {
            onUploadProgress: (ProgressEvent) => {
              let progress =
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%";
              setProgess(progress);
            },
          })
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
      formData.append("contact", contact);
      formData.append("about", about);
      formData.append("memberid", memberid);
      formData.append("email", email);
      if (file === undefined) {
        formData.append("file", detailedbio);
      } else {
        formData.append("file", file);
      }
      try {
        response = await axios
          .patch(`https://grssprojectserver.herokuapp.com/user`, formData, config, {
            onUploadProgress: (ProgressEvent) => {
              let progress =
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%";
              setProgess(progress);
            },
          })
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
        console.log(err);
      }
    }
  };
  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (token === null || token === undefined) {
      history.push("/");
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
              setName(
                temp_response.data.first_name +
                  " " +
                  temp_response.data.last_name
              );
              setFile(temp_response.data.profile);
            } catch (err) {
              console.log(err);
            }
          }
        } else {
          try {
            response = await axios.get(`https://grssprojectserver.herokuapp.com/user`, config);
            setUser(response.data);
            setName(response.data.first_name + " " + response.data.last_name);
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
  const changeprofile = () => {
    localStorage.setItem("email", email);
    history.push("/addprofilepicture");
  };
  return (
    <Styles>
      <AddDetailedBiography
        show={showProfileModal}
        closeModal={() => setProfileModal(false)}
        onHide={() => setProfileModal(false)}
      />
      <Container className="main-bg">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="form-box">
            <div className="member-header" style={{ float: "top" }}>
              <div>
                <div style={{ width: "50%", float: "left" }}>
                  {links(profile) != "undefined" ? (
                    <div style={{ float: "left" }}>
                      <img src={links(profile)} className="profile-img"></img>
                    </div>
                  ) : (
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                  )}
                  <div className="my-4 mx-3" style={{ float: "left" }}>
                    <h3>{name}</h3>
                  </div>
                </div>
                <div style={{ float: "right" }}>
                  <button className="member-button" onClick={changeprofile}>
                    Upload new picture
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="member-form">
            <div className="form-box w3-panel w3-border w3-border-white ">
              <div style={{ height: "30px" }}>
                <button
                  onClick={clicked}
                  className="member-button"
                  style={{ float: "right" }}
                  title="Edit profile"
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
              </div>
              <br></br>
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
                        <label>Update Detailed Biography : </label>
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
                      <i
                        class="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>
                      {error}
                    </Alert>
                  ) : null}
                  {status === "Warning" ? (
                    <Alert variant="warning">
                      <i
                        class="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>
                      Uploaded file format not supported. Please upload only
                      pdf file
                    </Alert>
                  ) : null}

                  <button
                    style={{
                      width: "100%",
                      padding: "14px 28px",
                      fontSize: "2rem",
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
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default Profile;
