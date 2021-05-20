import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Button, Modal, ProgressBar } from "react-bootstrap";
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
const UpdateNewsletter = (props) => {
  const token = localStorage.getItem("token");
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
    setFile(file); // storing file
    setCheckFile(true);
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
        response = await axios.patch(
          `http://localhost:5000/techMaterial/${localStorage.getItem(
            "materialIdUpdate"
          )}`,
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
        response = await axios.patch(
          `http://localhost:5000/techMaterial/${localStorage.getItem(
            "materialIdUpdate"
          )}`,
          formData,
          config
        );
        console.log(response.data);
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
          `http://localhost:5000/techMaterial/${localStorage.getItem(
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
        <div className="content w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Update Newsletter/Publication
          </div>
          <br></br>
          <Form>
            <Form.Group>
              <Form.Label>Material Type : </Form.Label>
              <Form.Control
                class="w3-input w3-animate-input"
                as="select"
                name="materialtype"
                value={materialtype}
                onChange={valueChanged}
              >
                <option>-- Select --</option>
                <option>Publication</option>
                <option>Newsletter</option>
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
              <Form.Label>Publication Link : </Form.Label>
              <input
                class="w3-input w3-animate-input"
                type="text"
                name="publicationlink"
                value={publicationlink}
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
            <center>
              <Button
                variant="outline-light"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  "font-size": "16px",
                  cursor: "pointer",
                }}
                onClick={updatedetails}
              >
                Update
              </Button>
            </center>
          </Form>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default UpdateNewsletter;
