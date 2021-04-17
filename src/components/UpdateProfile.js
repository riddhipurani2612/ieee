import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Button, ProgressBar } from "react-bootstrap";

const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -48px;
  }
  .text {
    color: #dbf1fb;
  }
`;
const UpdateProfile = (e) => {
  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
    setCheckFile(true);
  };
  const [user, setUser] = useState({});
  const {
    _id,
    first_name,
    last_name,
    role,
    address,
    contact,
    email,
    workplace,
    designation,
    password,
    about,
  } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
      formData.append("file", file);
      
      try {
        response = await axios.patch(`http://localhost:5000/user`, formData,config, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%";
            setProgess(progress);
          },
        });
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
          `http://localhost:5000/user`,
          user,
          config
        );
        console.log(response.data);
        alert("data updated");
      } catch (err) {
        console.log(err.response);
        console.log(err.request);
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
    try {
      response = await axios.get(`http://localhost:5000/user`, config);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div className="display-4 text-center my-5">Profile</div>
          <Form>
            <Form.Group>
              <Form.Label>About</Form.Label>
              <Form.Control
                type="text"
                name="about"
                value={about}
                onChange={(e) => {
                  setUser({ ...user, address: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => {
                  setUser({ ...user, contact: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Work Place</Form.Label>
              <Form.Control
                type="text"
                name="workplace"
                value={workplace}
                onChange={(e) => {
                  setUser({ ...user, workplace: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={designation}
                onChange={(e) => {
                  setUser({ ...user, designation: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload Profile Picture : </Form.Label>
              <br></br>
              <input
                type="file"
                accept="image*"
                ref={el}
                onChange={handleChange}
              />
            </Form.Group>
            {checkFile && <ProgressBar now={progress} label={`${progress}%`} />}
            <Button onClick={updateUser}>Update</Button>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default UpdateProfile;
