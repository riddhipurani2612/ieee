import React, { useState, useRef, useEffect } from "react";
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
  const { title, about, youtubelink, materialtype } = material;

  const valueChanged = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
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
      const response = await axios.get(`http://localhost:5000/user/getrole`, config);
      console.log(response.data);
      if (response.data === "Student") {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const submit = async (e) => {
    if(file === undefined){
      setCheckFile(false);
    }
    const token = localStorage.getItem("token");
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
          formData,config,
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
        localStorage.setItem("materialId",response.data._id);
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
        localStorage.setItem("materialId",response.data._id);
        history.push("/detailedview");
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <br></br>
          <div className="display-3 text-center" style={{ color: "white", textDecoration: "underline" }}>Upload Lectures</div>
          <div>
            <Form>
              <Form.Group>
                <Form.Label>Lecture Type : </Form.Label>
                <Form.Control
                  as="select"
                  name="materialtype"
                  value={materialtype}
                  onChange={valueChanged}
                >
                  <option>-- Select --</option>
                  <option>Distinguished Lecture Program</option>
                  <option>Expert Lecture Program</option>
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
                <Form.Label>About : </Form.Label>
                <Form.Control
                  type="text"
                  name="about"
                  value={about}
                  onChange={valueChanged}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>YouTube Link : </Form.Label>
                <Form.Control
                  type="text"
                  name="youtubelink"
                  value={youtubelink}
                  onChange={valueChanged}
                ></Form.Control>
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
export default AddMaterial;
