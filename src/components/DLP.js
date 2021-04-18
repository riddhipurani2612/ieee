import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";
import ViewMaterial from "./ViewMaterial";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
  margin-top: -23px;
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

const DLP = () => {
  const [material, setMaterial] = useState([]);
  const {
    title,
    about,
    youtubelink,
    materialtype,
    uploadedby,
    materialfile,
  } = material;
  
  useEffect(async () => {
    const materialtype = "Distinguished Lecture Program";

    try {
      let response;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      response = await axios.get(
        `http://localhost:5000/techMaterial/materials/${materialtype}`,
        config
      );
      setMaterial(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const youtubeOptions = {
    width: "95%",
  };
  return (
    <Styles>
      <Container>
        <div className="main-bg text">
          <div className="display-3 text-center">Lectures</div>
          {material.map((materialObj, index) => (
            <ViewMaterial
              _id={materialObj._id}
              title={materialObj.title}
              about={materialObj.about}
              youtubelink={materialObj.youtubelink}
              publicationlink={materialObj.publicationlink}
              materialfile={materialObj.materialfile}
              uploadedby={materialObj.uploadedby}
            />
          ))}
        </div>
      </Container>
    </Styles>
  );
};

export default DLP;
