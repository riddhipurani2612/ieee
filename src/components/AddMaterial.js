import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Container, Form, ProgressBar, Alert } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./main.css";
const Styles = styled.div``;
const AddMaterial = () => {
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
    if (file != undefined && file != "") {
      const extension = file.name.split(".").pop() + "";
      if (extension === "pdf") {
        setFile(file); // storing file
        setCheckFile(true);
      } else {
        setStatus("Warning");
        alert(`${extension} file is not allowed`);
        e.target.value = null;
      }
    }
  };

  const [material, setMaterial] = useState({});
  const { title, about, youtubelink, publicationlink, materialtype } = material;

  const valueChanged = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    if (file === undefined) {
      setCheckFile(false);
    }
    const token = localStorage.getItem("token");
    if (token === null || token=== undefined) {
      history.goBack();
    }
    if (checkFile) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("title", title);
      formData.append("about", about);
      formData.append("youtubelink", youtubelink);
      formData.append("materialtype", materialtype);
      formData.append("file", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth-token": token,
        },
      };
      let response;
      try {
        response = await axios
          .post(
            "https://grssprojectserver.herokuapp.com/techMaterial",
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
          setStatus("Success");
        } else {
          setStatus("Warning");
          setError(response.data.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      e.preventDefault();
      let data = {
        title,
        about,
        youtubelink,
        materialtype,
        publicationlink,
      };
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      let response;
      try {
        response = await axios
          .post(
            "https://grssprojectserver.herokuapp.com/techMaterial",
            data,
            config
          )
          .catch((err) => {
            if (err.response) {
              setStatus("Error");
              setError(err.response.data.msg);
            }
          });
        if (response.data && response.statusText === "OK") {
          setStatus("Success");
        } else {
          setStatus("Warning");
          setError(response.data.message);
        }
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  useEffect(async () => {
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    if (token === null || token=== undefined) {
      history.push("/");
    }
    try {
      const response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getrole`,
        config
      );
      if (response.data && response.statusText === "OK") {
        if (response.data.role.includes("Student")) {
          history.goBack();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="material-header">Add Lecture</div>
          <br></br>
          <div className="material-form">
            <form onSubmit={submit}>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Lecture Type : </label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <select
                      required
                      className="w3-select"
                      name="materialtype"
                      value={materialtype}
                      onChange={valueChanged}
                      required
                    >
                      <option value="">-- Select Lecture Type --</option>
                      <option>Distinguished Lecture Program</option>
                      <option>Expert Lecture Program</option>
                    </select>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Title : </label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      placeholder="Enter Title"
                      className="w3-input w3-animate-input"
                      type="text"
                      name="title"
                      value={title}
                      onChange={valueChanged}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>About : </label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      placeholder="More about lecture"
                      className="w3-input w3-animate-input"
                      type="text"
                      name="about"
                      value={about}
                      onChange={valueChanged}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>YouTube Link : </label>
                  </Col>
                  <Col>
                    <input
                      placeholder="Enter URL"
                      className="w3-input w3-animate-input"
                      type="url"
                      name="youtubelink"
                      value={youtubelink}
                      onChange={valueChanged}
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Upload File : </label>
                  </Col>
                  <Col>
                    <input
                      type="file"
                      accept="application/pdf"
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
                  Uploaded file format not supported. Please upload only pdf
                  file
                </Alert>
              ) : null}

              <button
                className="material-button"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Add Lecture
              </button>
            </form>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default AddMaterial;
