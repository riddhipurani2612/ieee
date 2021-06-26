import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Form,
  Container,
  Button,
  Row,
  Col,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Styles = styled.div``;
const UpdateNewsletter = (props) => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();
  const [material, setMaterial] = useState({});
  const { title, about, publicationlink, materialtype, materialfile } =
    material;
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

  const updatedetails = async (e) => {
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
        response = await axios
          .patch(
            `https://grssprojectserver.herokuapp.com/techMaterial/${localStorage.getItem(
              "materialIdUpdate"
            )}`,
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
        if (response.data != undefined && response.statusText === "OK") {
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
        response = await axios
          .patch(
            `https://grssprojectserver.herokuapp.com/techMaterial/${localStorage.getItem(
              "materialIdUpdate"
            )}`,
            formData,
            config
          )
          .catch((err) => {
            if (err.response) {
              setStatus("Error");
              setError(err.response.data.msg);
            }
          });
        if (response.data != undefined && response.statusText === "OK") {
          setStatus("Success");
        } else {
          setStatus("Error");
          setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(async () => {
    const token = localStorage.getItem("token");

    let response;
    if (localStorage.getItem("materialIdUpdate")) {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        response = await axios.get(
          `https://grssprojectserver.herokuapp.com/techMaterial/${localStorage.getItem(
            "materialIdUpdate"
          )}`,
          config
        );
        setMaterial(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg text">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="material-header">
            Update Newsletter/<br></br>Publication
          </div>
          <br></br>
          <Form onSubmit={updatedetails} className="material-form">
            <Form.Group>
              <Row>
                <Col sm="4">
                  <label>Material Type : </label>
                </Col>
                <Col>
                  <select
                    name="materialtype"
                    value={materialtype}
                    onChange={(e) => {
                      setMaterial({
                        ...material,
                        materialtype: e.target.value,
                      });
                    }}
                    className="w3-select"
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
                </Col>
                <Col>
                  <input
                    className="w3-input w3-animate-input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      setMaterial({ ...material, title: e.target.value });
                    }}
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
                    className="w3-input w3-animate-input"
                    type="text"
                    name="publicationlink"
                    value={(e) => {
                      setMaterial({
                        ...material,
                        publicationlink: e.target.value,
                      });
                    }}
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
            {checkFile && <ProgressBar now={progress} label={`${progress}%`} />}
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
              onClick={updatedetails}
            >
              Update
            </button>
          </Form>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default UpdateNewsletter;
