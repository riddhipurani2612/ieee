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
const UpdateMaterial = (props) => {
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
          console.log(response.data);
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
          console.log(response.data);
          localStorage.setItem("materialId", response.data._id);
          localStorage.removeItem("materialIdUpdate");
          history.push("/detailedview");
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
      <Container className="main-bg text">
        <br></br>
        <div className="content w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Update Material
          </div>
          <br></br>
          <Form>
            <Form.Group>
              <Form.Label>Lecture Type : </Form.Label>
              <Form.Control
                as="select"
                name="materialtype"
                value={materialtype}
                onChange={(e) => {
                  setMaterial({ ...material, materialtype: e.target.value });
                }}
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
                onChange={(e) => {
                  setMaterial({ ...material, title: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>About : </Form.Label>
              <Form.Control
                as="textarea"
                name="about"
                value={about}
                onChange={(e) => {
                  setMaterial({ ...material, about: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>YouTube Link : </Form.Label>
              <Form.Control
                type="text"
                name="youtubelink"
                value={youtubelink}
                onChange={(e) => {
                  setMaterial({ ...material, youtubelink: e.target.value });
                }}
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
            {checkFile && <ProgressBar now={progress} label={`${progress}%`} />}
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
          </Form>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default UpdateMaterial;
