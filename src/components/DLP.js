import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";
import ViewMaterial from "./ViewMaterial";
import "./main.css";
const Styles = styled.div``;

const DLP = () => {
  const [material, setMaterial] = useState([]);
  const { title, about, youtubelink, materialtype, uploadedby, materialfile } =
    material;
  const [error, setError] = useState(false);
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
      if (response.data && response.statusText === "OK") {
        setMaterial(response.data);
      }
      if (material === []) {
        setError(true);
      }
    } catch (err) {
      setError(true)
    }
  }, []);
  const youtubeOptions = {
    width: "95%",
  };
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "http://localhost:5000/" + temp;
    }
  };
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="material-header">Distinguished Lectures</div>
            <br></br>
            {error ? (
              <div> Data Not Received</div>
            ) : (
              <div>
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
            )}
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};

export default DLP;
