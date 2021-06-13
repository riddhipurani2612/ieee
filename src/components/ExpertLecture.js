import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import axios from "axios";
import ViewMaterial from "./ViewMaterial";
const Styles = styled.div``;

const ExpertLecture = () => {
  const [material, setMaterial] = useState([]);
  const { title, about, youtubelink, materialtype, uploadedby, materialfile } =
    material;
  const [error, setError] = useState(false);

  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const materialtype = "Expert Lecture Program";
    try {
      response = await axios
        .get(
          `http://localhost:5000/techMaterial/materials/${materialtype}`,
          config
        )
        console.log(response)
      if (response.data && response.statusText === "OK") {
        setMaterial(response.data);
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
            <div className="material-header">Expert Lectures</div>
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
export default ExpertLecture;
