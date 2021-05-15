import React, { useState, useRef, useEffect } from "react";
import { Button, Container, Form, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
  .content {
    max-width: 800px;
    margin: auto;
    padding: 50px;
  }
`;

const SignUp = () => {
  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    const extension = file.split(".").pop() === "jpg";
    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "bmp" ||
      extension === "png"
    ) {
      setFile(file); // storing file
      setCheckFile(true);
    } else {
      alert("Uploaded File type invalid");
    }
  };
  const [signupData, setSignupData] = useState({});
  const history = useHistory();
  const signupValueChanged = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const [header, setHeader] = useState("");
  useEffect(async () => {
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    if (token === null) {
      setHeader("Sign Up");
    } else {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/getrole`,
          config
        );
        console.log(response.data);
        if (response.data.role.includes("Admin")) {
          setHeader("Add Member");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const {
    first_name,
    last_name,
    role,
    address,
    contact,
    email,
    workplace,
    designation,
    about,
    password,
    confirmpassword,
  } = signupData;

  const submit = async (e) => {
    if (password !== confirmpassword) {
      alert("Password not same");
    } else {
      if (checkFile) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("role", role);
        formData.append("about", about);
        formData.append("password", password);
        formData.append("designation", designation);
        formData.append("workplace", workplace);
        formData.append("email", email);
        formData.append("contact", contact);
        formData.append("file", file);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        let response;
        try {
          response = await axios.post("http://localhost:5000/user", formData, {
            onUploadProgress: (ProgressEvent) => {
              let progress =
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%";
              setProgess(progress);
            },
          });
          console.log(response.data);
          if (response.status === "200") {
            history.push("/login");
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        e.preventDefault();
        let data = {
          first_name,
          last_name,
          role,
          contact,
          email,
          workplace,
          designation,
          password,
          about,
        };
        console.log(data);
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        let response;
        try {
          response = await axios.post(
            "http://localhost:5000/user",
            data,
            config
          );
          console.log(response.data);
          if (response.status === "200") {
            history.push("/login");
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <br></br>
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            {header}
          </div>
          <br></br>
          <div className="content w3-panel w3-border w3-border-white">
            <Form className="text">
              <Form.Group controlId="signup_fisrtname">
                <Form.Label>First name</Form.Label>
                <input
                  type="text"
                  class="w3-input"
                  value={first_name}
                  name="first_name"
                  placeholder="Enter first name"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="signup_lastname">
                <Form.Label>Last name</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  value={last_name}
                  name="last_name"
                  placeholder="Enter last name"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Choose role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  value={role}
                  onChange={signupValueChanged}
                >
                  <option selected="true">--Select--</option>
                  <option>Student</option>
                  <option>Professional Member</option>
                  <option>Founder Member</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_contact">
                <Form.Label>Contact No</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  value={contact}
                  name="contact"
                  placeholder="+91-**********"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="signup_email">
                <Form.Label>Email</Form.Label>
                <br></br>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  value={email}
                  name="email"
                  placeholder="example@xzy.com"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="signup_workplace">
                <Form.Label>Work_Place/University</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  value={workplace}
                  name="workplace"
                  placeholder="Enter work place"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="signup_designation">
                <Form.Label>Designation</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  value={designation}
                  name="designation"
                  placeholder="Enter designation"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Short Biography</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  as="textarea"
                  row="4"
                  name="about"
                  value={about}
                  placeholder="Tell us more about you"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="signup_password">
                <Form.Label>Password</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Enter Password"
                  onChange={signupValueChanged}
                ></input>
              </Form.Group>
              <Form.Group controlId="signup_confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="password"
                  value={confirmpassword}
                  name="confirmpassword"
                  placeholder="Enter Password"
                  onChange={signupValueChanged}
                ></input>
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
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
              <Button
                onClick={submit}
                variant="outline-light"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  "font-size": "20px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Button>
            </Form>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default SignUp;
