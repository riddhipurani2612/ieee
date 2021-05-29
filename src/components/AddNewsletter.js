import React, { useState, useEffect, useRef } from "react";
import {
  Row,
  Col,
  Form,
  Container,
  Button,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "./main.css";
const Styles = styled.div``;
const AddMaterial = () => {
  let response;
  const history = useHistory();
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    if (token === null) {
      history.push("/");
    }
    try {
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user/getrole`, config);
      console.log(response.data);
      if (response.data === "Student") {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [material, setMaterial] = useState({});
  const valueChanged = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };
  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    const extension = file.name.split(".").pop() + "";
    if (extension === "pdf") {
      setFile(file); // storing file
      setCheckFile(true);
    } else {
      setStatus("Warning");
      alert(`${extension} file is not allowed`);
      e.target.value = null;
    }
  };
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const { title, about, publicationlink, materialtype } = material;
  const uploadMaterial = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(title);
    formData.append("title", title);
    formData.append("about", about);
    formData.append("publicationlink", publicationlink);
    formData.append("materialtype", materialtype);
    if (checkFile) {
      formData.append("file", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth-token": token,
        },
      };
      let response;
      try {
        response = await axios.post(
          "https://grssprojectserver.herokuapp.com/techMaterial",
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
        if (response.statusText === "OK") {
          setStatus("Success");
        } else {
          setStatus("Warning");
          setError(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      let data = {
        title,
        about,
        publicationlink,
        materialtype,
      };
      console.log(data);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      let response;
      try {
        response = await axios.post(
          "https://grssprojectserver.herokuapp.com/techMaterial",
          data,
          config
        );
        if (response.statusText === "OK") {
          setStatus("Success");
        } else {
          setStatus("Warning");
          setError(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Styles>
      <Container className="main-bg">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="material-header">
            Add Newsletter/<br></br>Publication
          </div>
          <br></br>
          <div class="material-form">
            <form onSubmit={uploadMaterial}>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Material Type : </label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <select
                      required
                      class="w3-select"
                      name="materialtype"
                      value={materialtype}
                      onChange={valueChanged}
                      required
                    >
                      <option value="">-- Select --</option>
                      <option>Publication</option>
                      <option>Newsletter</option>
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
                      class="w3-input w3-animate-input"
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
                    <label>Publication Link : </label>
                  </Col>
                  <Col>
                    <input
                      placeholder="Enter URL"
                      class="w3-input w3-animate-input"
                      type="url"
                      name="publicationlink"
                      value={publicationlink}
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
              </Form.Group>
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
              <center>
                <Button
                  className="material-button"
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    "font-size": "16px",
                    cursor: "pointer",
                  }}
                >
                  Upload
                </Button>
              </center>
            </form>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default AddMaterial;
