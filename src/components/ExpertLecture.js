import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import axios from "axios";
import MaterialView from "./ViewMaterial";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
}
.text {
  color: #dbf1fb;
}
  .center{
    paddingBottom: "56.25%";
    width: "100%";
    height: "100%
  }
`;

const ExpertLecture = () => {
  const [material, setMaterial] = useState([]);
  const { title, about, youtubelink, materialtype,uploadedby, materialfile } = material;
  useEffect(async()=>{
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const materialtype = "Expert Lecture Program";
    try {
      response = await axios.get(
        `http://localhost:5000/techMaterial/materials/${materialtype}`,
        config
      );
      setMaterial(response.data);
    } catch (err) {
      console.log(err);
    }
  },[]);
  const youtubeOptions = {
    width: "95%",
  };
  return (
    <Styles>
      <Container>
        <div className="main-bg text">
        <div className="display-3 text-center" style={{ color: "white", textDecoration: "underline" }}>Expert Lectures</div>
          {material.map((materialObj,index)=>(
            <MaterialView 
              _id={materialObj._id}
              title={materialObj.title}
              about = {materialObj.about}
              youtubelink = {materialObj.youtubelink}
              publicationlink = {materialObj.publicationlink}
              materialfile = {materialObj.materialfile}
              uploadedby = {materialObj.uploadedby}
            />
          ))}
        </div>
      </Container>
    </Styles>
  );
};

export default ExpertLecture;
