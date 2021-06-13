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
  const [error, setError] = useState(false);
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
  const link = (link) => {
    if (link != undefined) {
      return "http://localhost:5000/" + link;
    } else {
      return "undefined";
    }
  };
  const [sort, setSort] = useState("");
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="material-header">Newsletter</div>
            <br></br>
            {error ? (
              <div>Data Not Found </div>
            ) : (
              <ul className="material-content">
                {material.map((materialObj, index) => (
                  <ViewNP
                    materialtype="Newsletter"
                    _id={materialObj._id}
                    title={materialObj.title}
                    materialfile={link(materialObj.materialfile)}
                  />
                ))}
              </ul>
            )}
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};

export default Newsletter;
