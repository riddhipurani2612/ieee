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
    if(token === null){
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
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  };
  const { title, about, youtubelink } = material;
  const [message, setMessage] = useState("");
  const uploadMaterial = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(title);
    formData.append("title", title);
    formData.append("about", about);
    formData.append("youtubelink", youtubelink);
    formData.append("file", file);
    let config = {
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
  };
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <Form>
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
              <Form.Label>About : </Form.Label>
              <Form.Control
                type="text"
                name="about"
                value={about}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Youtube Link : </Form.Label>
              <Form.Control
                type="text"
                name="youtubelink"
                value={youtubelink}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload File : </Form.Label>
              <input
                type="file"
                accept="application/pdf"
                ref={el}
                onChange={handleChange}
              />
            </Form.Group>
            <ProgressBar now={progress} label={`${progress}%`} />
            <Button onClick={uploadMaterial}>Upload</Button>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default AddMaterial;
