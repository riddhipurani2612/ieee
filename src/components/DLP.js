import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";
import ViewMaterial from "./ViewMaterial";
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
        `https://grssprojectserver.herokuapp.com/techMaterial/materials/${materialtype}`,
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
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };
  return (
    <Styles>
      <Container className="main-bg text">
        <br></br>
        <div className="w3-panel w3-border w3-border-white">
          <div
            className="display-4 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Distinguished Lecture Program
          </div>
          <br></br>
          {material.map((materialObj, index) => (
            <ViewMaterial
              _id={materialObj._id}
              title={materialObj.title}
              about={materialObj.about}
              youtubelink={materialObj.youtubelink}
              publicationlink={materialObj.publicationlink}
              materialfile={links(materialObj.materialfile)}
              uploadedby={materialObj.uploadedby}
            />
          ))}
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};

export default DLP;
