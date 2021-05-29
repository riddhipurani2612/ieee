import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Form,
  Container,
  Button,
  Row,
  Col,
  Alert,
  ProgressBar,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Styles = styled.div``;
const UpdateMaterial = (props) => {
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
  const [material, setMaterial] = useState({});
  const { title, about, youtubelink, materialtype, materialfile } = material;

  const updatedetails = async (e) => {
    try {
      const token = localStorage.getItem("token");
      if (checkFile) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", title);
        formData.append("about", about);
        formData.append("youtubelink", youtubelink);
        formData.append("materialtype", materialtype);
        if (file != "") {
          formData.append("file", file);
        } else {
          formData.append("file", materialfile);
        }
        console.log(token);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
            "x-auth-token": token,
          },
        };
        let response;
        try {
          response = await axios.patch(
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
          );
          if (response.statusText === "OK") {
            setStatus("Success");
          } else {
            setStatus("Warning");
            setError(response.data.message);
          }
        } catch (err) {
          console.log(err.response);
          console.log(err.request);
          console.log(err.message);
        }
      } else {
        e.preventDefault();
        let data = {
          title,
          about,
          youtubelink,
          materialtype,
        };
        console.log(data);
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
        let response;
        try {
          response = await axios.patch(
            `https://grssprojectserver.herokuapp.com/techMaterial/${localStorage.getItem(
              "materialIdUpdate"
            )}`,
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
    } catch (err) {
      console.log(err);
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
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="material-header">Update Material</div>
            <br></br>
            <form onSubmit={updatedetails}>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Lecture Type : </label>
                    <span style={{ color: "red" }}>*</span>
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
                      required
                      className="w3-select"
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
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => {
                        setMaterial({ ...material, title: e.target.value });
                      }}
                      reuired
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
                    <textarea
                      placeholder="More about Lecture"
                      className="textarea"
                      name="about"
                      value={about}
                      onChange={(e) => {
                        setMaterial({ ...material, about: e.target.value });
                      }}
                      required
                      row={30}
                    ></textarea>{" "}
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
                      type="url"
                      name="youtubelink"
                      value={youtubelink}
                      onChange={(e) => {
                        setMaterial({
                          ...material,
                          youtubelink: e.target.value,
                        });
                      }}
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
                    <input type="file" ref={el} onChange={handleChange} />
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

              <Button
                className="material-button"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  "font-size": "16px",
                  cursor: "pointer",
                }}
              >
                Update
              </Button>
            </form>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default UpdateMaterial;
