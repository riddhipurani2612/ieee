import React,{useState} from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from 'axios';
import styled from "styled-components";
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
    height: 100vh;
  }
  .text {
    color: white;
  }
`;

const TechnicalMaterial = (props) => {
    const [uploadData, setUploadData] = useState({});
    const valueChange =  (e) => {
      setUploadData({ ...uploadData, [e.target.name]: e.target.value });
    };
  
    const {
        title,
        text,
        links,
        material_type,
        _id = localStorage.getItem("loggedInUserId"),
    } = uploadData;
  
    const upload = async(e) => {
        e.preventDefault();
        let data = {
            title,
            text,
            links,
            material_type,
            _id,
        };
        let config = {
          headers :{
            "Content-Type": "application/json",
          },
        };
        let response;
        try{
          response = await axios.post(
            "http://localhost:5000/techMaterial_data",
            data,
            config
          );
          console.log(response.data);
        }
        catch(err){
            console.log(err);
        }
      }
    
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div className="h3">Upload Material</div>
          <div>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className="col-xs-4"
                  type="text"
                  value={title}
                  name="title"
                  placeholder="Enter Title"
                  onChange={valueChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="col-xs.4"
                  type="text"
                  value={text}
                  name="text"
                  placeholder="About Material"
                  onChange={valueChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Material Links</Form.Label>
                <Form.Control
                      className="col-xs-4"
                      type="text"
                      value={links}
                      name="links"
                      placeholder="Enter Links"
                      onChange={valueChange}></Form.Control>
              </Form.Group>
            </Form>
            <Form.Group>
                <Form.Label>Choose Material Type</Form.Label>
                <Form.Control
                className="col-xs-4"
                  as="select"
                  name="material_type"
                  value={material_type}
                  onChange={valueChange}
                >
                  <option selected="true">--Select--</option>
                  <option>Lecture</option>
                  <option>SAR</option>
                  <option>Publication</option>
                </Form.Control>
            </Form.Group>
            <Button onClick={upload}>Upload</Button>
          </div>
        </Container>
      </div>
    </Styles>
  );
};

export default TechnicalMaterial;
