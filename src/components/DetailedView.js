import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import FileViewer from "react-file-viewer";
import "animate.css/animate.min.css";
import axios from "axios";
import { useHistory } from "react-router";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    border: 1px solid white;
  }
  .text {
    color: #dbf1fb;
  }
`;
const DetailedView = () => {
  const history = useHistory();
  const [material, setMaterial] = useState({});
  const {
    title,
    about,
    youtubelink,
    publicationlink,
    materialtype,
    uploadedby,
    materialfile,
  } = material;
  const [youtube, setYoutube] = useState(false);
  const [publication, setPublicationlink] = useState(false);
  const [materialFile, setMaterialfile] = useState(false);
  let filetype, file;
  useEffect(async () => {
    let response;
    if (localStorage.getItem("materialId")) {
      const materialid = localStorage.getItem("materialId");
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        response = await axios.get(
          `http://localhost:5000/techMaterial/${materialid}`,
          config
        );
        setMaterial(response.data);
        console.log(title);
        console.log(about);
        console.log(response.data);
        console.log(material);
      } catch (err) {
        console.log(err);
      }
      if (youtube != null) {
        setYoutube(true);
        console.log(youtubelink);
      }
      if (publication != null) {
        setPublicationlink(true);
      }
      if(materialfile === undefined){
        setMaterialfile(false);
      }
      else{
        setMaterialfile(true);
        console.log("file");
        console.log(materialfile);
      }
    } else {
      history.goBack();
    }

    localStorage.removeItem("materialId");
  }, [material.title]);
  return (
    <Styles>
      <Container className="main-bg text">
        <div>
          <h1 className="main-bg text">{title}</h1>
          {about}
          <div>{youtube && <ReactPlayer url={youtubelink} width="100%" />}</div>
          <div>
            {materialFile && (
                <a href={materialfile} target="blank"><Button>Click Here to Download File</Button></a>
              )}
          </div>
        </div>
      </Container>
    </Styles>
  );
};
export default DetailedView;
