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
    max-width: 500px;
    margin: auto;
    padding: 50px;
  }
`;
const AddMaterial = () => {
  const history = useHistory();
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
    console.log(materialtype);
    if (checkFile) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("title", title);
      formData.append("about", about);
      formData.append("youtubelink", youtubelink);
      formData.append("materialtype", materialtype);
      formData.append("file", file);
      console.log(token);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth-token": token,
        },
      };
      let response;
      try {
        response = await axios.post(
          "http://localhost:5000/techMaterial",
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
        localStorage.setItem("materialId", response.data._id);
        history.push("/detailedview");
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
        publicationlink,
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
        response = await axios.post(
          "http://localhost:5000/techMaterial",
          data,
          config
        );
        console.log(response.data);
        localStorage.setItem("materialId", response.data._id);
        history.push("/detailedview");
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
    if (token === null) {
      history.push("/");
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/user/getrole`,
        config
      );
      console.log(response.data);
      if (response.data.role.includes("Student")) {
        history.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg text">
        <br></br>
        <div className="content w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Add Material
          </div>
          <br></br>
          <Form>
            <Form.Group>
              <Form.Label>Lecture Type : </Form.Label>
              <Form.Control
                class="w3-input w3-animate-input"
                as="select"
                name="materialtype"
                value={materialtype}
                onChange={valueChanged}
              >
                <option selected>-- Select --</option>
                <option>Distinguished Lecture Program</option>
                <option>Expert Lecture Program</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Title : </Form.Label>
              <input
                class="w3-input w3-animate-input"
                type="text"
                name="title"
                value={title}
                onChange={valueChanged}
              ></input>
            </Form.Group>
            <Form.Group>
              <Form.Label>About : </Form.Label>
              <input
                class="w3-input w3-animate-input"
                type="text"
                name="about"
                value={about}
                onChange={valueChanged}
              ></input>
            </Form.Group>
            <Form.Group>
              <Form.Label>YouTube Link : </Form.Label>
              <input
                class="w3-input w3-animate-input"
                type="text"
                name="youtubelink"
                value={youtubelink}
                onChange={valueChanged}
              ></input>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload File : </Form.Label>
              <br></br>
              <input
                type="file"
                accept="application/pdf"
                ref={el}
                onChange={handleChange}
              />
            </Form.Group>
            {checkFile && <ProgressBar now={progress} label={`${progress}%`} />}
            <Button
              variant="outline-light"
              style={{
                width: "100%",
                padding: "14px 28px",
                "font-size": "16px",
                cursor: "pointer",
              }}
              onClick={submit}
            >
              Submit
            </Button>
          </Form>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default AddMaterial;
