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
.text,a {
  font-size: 140%;
  line-height: 2rem;
  color : "white"
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

const Publication = () => {
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
    const materialtype1 = "Publication";

    try {
      let response;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      response = await axios.get(
        `https://grssprojectserver.herokuapp.com/techMaterial/materials/${materialtype1}`,
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
      <Container className="main-bg text">
        <br></br>
        <div className="w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Publications
          </div>
          <br></br><br></br>
          <ul style={{"color" : "white"}}>
            {material.map((materialObj, index) => (
              <div>
                <li>
                  <a href={materialObj.publicationlink} target="blank">
                    {materialObj.title}
                  </a>
                </li>
                <br></br>
              </div>
            ))}
          </ul>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};

export default Publication;
