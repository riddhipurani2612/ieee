import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
}
.text, a {
  font-size: 140%;
  line-height: 2rem;
}
a:link {
  color: white;
}

/* visited link */
a:visited {
  color: white;
}

/* mouse over link */
a:hover {
  color: grey;
}

  .center{
    paddingBottom: "56.25%";
    width: "100%";
    height: "100%
  }
`;

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
      <Container className="main-bg">
        <br></br>
        <div className="main-bg text w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            News Letters
          </div>
          <Row className="my-3">
            <Col>
              <div
                className="display-4 my-5 text-center"
                style={{ color: "white" }}
              >
                <br></br>Need of a GRSS Chapter Newsletter
              </div>
            </Col>
            <Col>
              <YouTube videoId="OI4nz-Gvlj4" opts={youtubeOptions} />
            </Col>
          </Row>
          <div>
            <ul>
              {material.map((materialObj, index) => (
                <div>
                  <li>
                    <a href={materialObj.materialfile} target="blank">
                      {materialObj.title}
                    </a>
                  </li>
                  <br></br>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};

export default Newsletter;
