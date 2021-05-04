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
} from "react-bootstrap";
import PasswordChange from "./PasswordChange";
import { useHistory } from "react-router";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
  .content {
    max-width: 700px;
    margin: auto;
    padding: 50px;
  }
`;
const Profile = (e) => {
  const history = useHistory();
  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    const extension = file.split(".").pop();
    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "bmp" ||
      extension === "png"
    ) {
      setFile(file); // storing file
      setCheckFile(true);
    } else {
      alert("Only Image File Allowed");
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
      formData.append("about", about);
      formData.append("designation", designation);
      formData.append("workplace", workplace);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("about", about);
      formData.append("file", file);

      try {
        response = await axios.patch(
          `https://grssprojectserver.herokuapp.com/user`,
          formData,
          config,
          {
            onUploadProgress: (ProgressEvent) => {
              let progress =
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%";
              setProgess(progress);
            },
          }
        );
        console.log(response.data);
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
        response = await axios.patch(
          `https://grssprojectserver.herokuapp.com/user`,
          user,
          config
        );
        console.log(response.data);
        alert("data updated");
        window.location.reload(false);
      } catch (err) {
        console.log(err.response);
        console.log(err.request);
      }
    }
    setEditable(false);
    window.location.reload(false);
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
    try {
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user`, config);
      setUser(response.data);
      console.log(response.data);
      if (response.data.role === "Admin") {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
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
      <Container className="main-bg text">
        <br></br>
        <div className="content w3-panel w3-border w3-border-white">
          <Row>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
              {links(profile) != "undefined" ? (
                <div>
                  <img
                    src={links(profile)}
                    alt={profile}
                    style={{ "border-radius": "50%" }}
                    height="100rem"
                    width="100rem"
                  ></img>
                </div>
              ) : (
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              )}

              <h2 className="my-4 mx-3">
                {first_name} {last_name}
              </h2>
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
              <Button
                onClick={clicked}
                variant="outline-light"
                style={{ float: "right", "margin-top": "2rem" }}
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
              </Button><br></br><br></br>
              <Button
                style={{ float: "right", "margin-top": "1.5rem", "margin-right" : "-4.6rem" }}
                variant="outline-light"
                onClick={() => setPasswordModal(true)}
                title="Change Password"
              >
                Change Password
              </Button>
            </Col>
          </Row>

          <div>
            <Form>
              <Form.Group>
                <Form.Label>About</Form.Label>
                <input
                  className="w3-input w3-animate-input"
                  type="text"
                  name="about"
                  value={about}
                  disabled={editable}
                  onChange={(e) => {
                    setUser({ ...user, about: e.target.value });
                  }}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Contact</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  name="contact"
                  disabled={editable}
                  value={contact}
                  onChange={(e) => {
                    setUser({ ...user, contact: e.target.value });
                  }}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Work Place</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  disabled={editable}
                  value={workplace}
                  onChange={(e) => {
                    setUser({ ...user, workplace: e.target.value });
                  }}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Designation</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  name="designation"
                  disabled={editable}
                  value={designation}
                  onChange={(e) => {
                    setUser({ ...user, designation: e.target.value });
                  }}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Upload Profile Picture : </Form.Label>
                <br></br>
                <input
                  class="w3-input w3-animate-input"
                  type="file"
                  accept="image*"
                  disabled={editable}
                  ref={el}
                  onChange={handleChange}
                />
              </Form.Group>
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
              <Button
                onClick={updateUser}
                variant="outline-light"
                className="mt-5"
                disabled={editable}
              >
                Update
              </Button>
            </Form>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default Profile;
