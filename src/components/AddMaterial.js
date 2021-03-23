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

  const { title, about, youtubelink, materialfile } = material;
  const [message, setMessage] = useState("");
  const uploadMaterial = async (e) => {
    let _id = localStorage.getItem("loggedInUserId");
    e.preventDefault();
    let formData=new FormData();
    console.log(title);
    formData.append("title",title);
    formData.append("about",about);
    formData.append("youtubelink",youtubelink);
    formData.append("materialfile",materialfile);
    formData.append("uploadedby",_id);
    let config = {
      headers:{
        'content-type': 'multipart/form-data'
      }
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
              <Form.Control
                type="file"
                name="materialfile"
                value={materialfile}
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
