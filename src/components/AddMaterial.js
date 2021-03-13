import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
`;
const AddMaterial = () => {
  const [material, setMaterial] = useState({});
  const valueChanged = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };

  const { title, about, youtubelink, file } = material;
  const [message, setMessage] = useState("");
  const uploadMaterial = async (e) => {
    let _id = localStorage.getItem("loggedInUserId");
    e.preventDefault();
    let formData=new FormData();
    console.log(title);
    formData.append("title",title);
    formData.append("about",about);
    formData.append("youtubelink",youtubelink);
    formData.append("file",file);
    formData.append("uploadedby",_id);
    let config = {
      "Content-Type" : "multipart/form-data",
    };
    console.log(formData);
    let response;
    try {
      response = await axios.post(
        "http://localhost:5000/techMaterial",
        formData,
        config
      );
      console.log(response);
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div>{message}</div>
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
              <Form.Control
                type="file"
                name="file"
                value={file}
                onChange={valueChanged}
              ></Form.Control>
            </Form.Group>
            <Button onClick={uploadMaterial}>Upload</Button>
          </Form>
        </Container>
      </div>
    </Styles>
  );
};
export default AddMaterial;
