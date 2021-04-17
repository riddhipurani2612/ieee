import React, { useState, useEffect, useRef } from "react";
import { Form, Container, Button, ProgressBar } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
`;
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
      response = await axios.get(`http://localhost:5000/user/getrole`, config);
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
    setFile(file); // storing file
    setCheckFile(true);
  };
  const { title, about, publicationlink, materialtype } = material;
  const [message, setMessage] = useState("");
  const uploadMaterial = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(title);
    formData.append("title", title);
    formData.append("about", about);
    formData.append("publicationlink", publicationlink);
    formData.append("materialtype",materialtype);
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
          "http://localhost:5000/techMaterial",
          formData,
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
          "http://localhost:5000/techMaterial",
          data,
          config
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Styles>
      <div className="main-bg text">
        <Container>

          <div className="display-3 text-center" style={{ color: "#ECC30B", textDecoration: "underline" }}>Upload Newsletter/Publication Details</div>
          <Form>
            <Form.Group>
              <Form.Label>Material Type : </Form.Label>
              <Form.Control
                as="select"
                name="materialtype"
                value={materialtype}
                onChange={valueChanged}
                >
                  <option>-- Select --</option>
                  <option>Publications</option>
                  <option>Newsletters</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Title : </Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Publication Link : </Form.Label>
              <Form.Control
                type="text"
                name="publicationlink"
                value={publicationlink}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload File : </Form.Label><br></br>
              <input
                type="file"
                accept="application/pdf"
                ref={el}
                onChange={handleChange}
              />
            </Form.Group>
            {checkFile && <ProgressBar now={progress} label={`${progress}%`} />}
            <center><Button onClick={uploadMaterial}>Upload</Button></center><br></br><br></br>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default AddMaterial;