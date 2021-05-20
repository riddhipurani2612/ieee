import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";
import ViewNP from "./ViewNP";
import "./main.css";
const Styles = styled.div``;

const Newsletter = () => {
  const youtubeOptions = {
    width: "95%",
  };
  const [material, setMaterial] = useState([]);
  const {
    title,
    about,
    youtubelink,
    publicationlink,
    materialtype,
    uploadedby,
    materialfile,
  } = material;

  useEffect(async () => {
    const materialtype1 = "Newsletter";

    try {
      let response;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      response = await axios.get(
        `http://localhost:5000/techMaterial/materials/${materialtype1}`,
        config
      );
      setMaterial(response.data);
      console.log(material);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="material-header">Newsletter</div>
            <br></br>
            <br></br>
            <ul className="material-content">
              {material.map((materialObj, index) => (
                <ViewNP
                  _id={materialObj._id}
                  title={materialObj.title}
                  publicationlink={materialObj.publicationlink}
                />
              ))}
            </ul>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};

export default Newsletter;
