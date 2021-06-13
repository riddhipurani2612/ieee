import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Container, Form, ProgressBar, Alert } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Styles = styled.div``;

const SignUp = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [rolee, setRole] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    if (file != undefined && file != "") {
      const extension = file.name.split(".").pop() + "";
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
        const response = await axios
          .get(`http://localhost:5000/user/getrole`, config)
          .catch((err) => {
            if (err.response) {
              setStatus("Error");
              setError(err.response.data.msg);
            }
          });
        if (response.data && response.statusText === "OK") {
          if (response.data.role === "Admin") {
            setRole("Admin");
          }
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
    emails,
    memberid,
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
        formData.append("memberid", memberid);
        formData.append("emails", emails);
        formData.append("contact", contact);
        formData.append("file", file);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        let response;
        try {
          response = await axios
            .post("http://localhost:5000/user", formData, {
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
              }
            });
          if (response.data && response.statusText === "OK") {
            setStatus("Success");
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
          memberid,
          email,
          emails,
          workplace,
          designation,
          password,
          about,
        };
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        let response;
        try {
          response = await axios
            .post("http://localhost:5000/user", data, config)
            .catch((err) => {
              if (err.response) {
                setStatus("Error");
                setError(err.response.data.msg);
              }
            });
          if (response.data && response.statusText === "OK") {
            setStatus("Success");
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="member-header">{header}</div>
            <br></br>
            <div className="member-form">
              <form onSubmit={submit}>
                <Form.Group controlId="signup_fisrtname">
                  <Row>
                    <Col sm="4">
                      <label>First name</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="text"
                        class="w3-input"
                        value={first_name}
                        name="first_name"
                        placeholder="Enter first name"
                        onChange={signupValueChanged}
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
                        value={last_name}
                        name="last_name"
                        placeholder="Enter last name"
                        onChange={signupValueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="role">
                  <Row>
                    <Col sm="4">
                      <label>Choose role</label>
                    </Col>
                    <Col>
                      <select
                        name="role"
                        className="w3-select"
                        value={role}
                        onChange={signupValueChanged}
                        required
                      >
                        <option selected="true" value="">
                          --Select--
                        </option>
                        <option>Student Member</option>
                        <option>Professional Member</option>
                      </select>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_contact">
                  <Row>
                    <Col sm="4">
                      <label>Contact No</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="text"
                        value={contact}
                        name="contact"
                        placeholder="+91-**********, +91-**********, +91-**********"
                        onChange={signupValueChanged}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_email">
                  <Row>
                    <Col sm="4">
                      <label>Email</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="text"
                        value={email}
                        name="email"
                        placeholder="example@xzy.com"
                        onChange={signupValueChanged}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_workplace">
                  <Row>
                    <Col sm="4">
                      <label>Work_Place/University</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="text"
                        value={workplace}
                        name="workplace"
                        placeholder="Enter work place"
                        onChange={signupValueChanged}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_designation">
                  <Row>
                    <Col sm="4">
                      <label>Designation</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="text"
                        value={designation}
                        name="designation"
                        placeholder="Enter designation"
                        onChange={signupValueChanged}
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
                        row="4"
                        name="about"
                        value={about}
                        placeholder="Tell us more about you"
                        onChange={signupValueChanged}
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
                        required
                        type="text"
                        value={memberid}
                        name="memberid"
                        title="Only numericals allowed"
                        placeholder="Enter IEEE Member ID"
                        onChange={signupValueChanged}
                        pattern="[0-9]+"
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_password">
                  <Row>
                    <Col sm="4">
                      <label>Password</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="password"
                        value={password}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        name="password"
                        placeholder="Enter Password"
                        onChange={signupValueChanged}
                        title="Password length should be 8 character and include one small and capital latter"
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="signup_confirmpassword">
                  <Row>
                    <Col sm="4">
                      <label>Confirm Password</label>
                    </Col>
                    <Col>
                      <input
                        required
                        type="password"
                        value={confirmpassword}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        name="confirmpassword"
                        placeholder="Enter Password"
                        onChange={signupValueChanged}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Upload Profile Picture </label>
                    </Col>
                    <Col>
                      <input
                        type="file"
                        accept="image*"
                        ref={el}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <br></br>
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
                  className="member-button"
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    "font-size": "20px",
                    cursor: "pointer",
                  }}
                >
                  {header}
                </button>
              </form>
            </div>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default SignUp;
