import React, { useState, useRef } from "react";
import { Button, Container, Form, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -23px;
  }
  .text {
    color: #dbf1fb;
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
    setFile(file); // storing file
    setCheckFile(true);
  };
  const [signupData, setSignupData] = useState({});
  const history = useHistory();
  const signupValueChanged = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

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
          <div className="display-4 text-center my-5">Sign Up</div>
          <div>
            <Form className="text">
              <Form.Group controlId="signup_fisrtname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  value={first_name}
                  name="first_name"
                  placeholder="Enter first name"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  value={last_name}
                  name="last_name"
                  placeholder="Enter last name"
                  onChange={signupValueChanged}
                ></Form.Control>
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
                <Form.Control
                  type="text"
                  value={contact}
                  name="contact"
                  placeholder="+91-**********"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  name="email"
                  placeholder="example@xzy.com"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_workplace">
                <Form.Label>Work_Place/University</Form.Label>
                <Form.Control
                  type="text"
                  value={workplace}
                  name="workplace"
                  placeholder="Enter work place"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  value={designation}
                  name="designation"
                  placeholder="Enter designation"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>More about you</Form.Label>
                <Form.Control
                  as="textarea"
                  row="4"
                  name="about"
                  value={about}
                  placeholder="Tell us more about you"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Enter Password"
                  onChange={signupValueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="signup_confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmpassword}
                  name="confirmpassword"
                  placeholder="Enter Password"
                  onChange={signupValueChanged}
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
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
              <Button onClick={submit}>Submit</Button>
            </Form>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default SignUp;
