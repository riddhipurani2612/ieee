import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import FileViewer from "react-file-viewer";
import "animate.css/animate.min.css";
import axios from "axios";
import { useHistory } from "react-router";
import "./main.css";
const Styles = styled.div``;
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
  let filetype, file;
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "http://localhost:5000/" + temp;
    }
  };
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
        if (response.data && response.statusText === "OK") {
          setMaterial(response.data);
        }
      } catch (err) {
        console.log(err);
      }
      if (youtube != null) {
        setYoutube(true);
      }
      if (publication != null) {
        setPublicationlink(true);
      }
    } else {
      history.goBack();
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg">
        <div className="w3-panel w3-border w3-border-white boxshadow">
          <div className="material-header">{title}</div>
          <div className="material-content">
            <p>{about}</p>
            <div>
              {materialfile != undefined ? (
                <a href={links(materialfile)} target="blank">
                  <button className="material-button">
                    Click Here to VIew File
                  </button>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            {youtube != "undefined" && (
              <ReactPlayer url={youtubelink} width="100%" height="40rem" />
            )}
            <br></br>
          </div>
        </div>
      </Container>
    </Styles>
  );
};
export default DetailedView;
