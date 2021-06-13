import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import { useHistory } from "react-router";
import axios from "axios";
import ViewMaterial from "./ViewMaterial";
import ViewNP from "./ViewNP";
const Styles = styled.div``;

const Publication = () => {
  const history = useHistory();

  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;

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
      if (response.data && response.statusText === "OK") {
        setMaterial(response.data);
      }
      if (material === []) {
        setError(true);
      }
    } catch (err) {
      setError(true)
    }
    const token = localStorage.getItem("token");

    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      if (token != null) {
        let response = await axios.get(
          `https://grssprojectserver.herokuapp.com/user/getrole`,
          config
        );
        setUser(response.data);
        if (role === "Student") {
          setStudent(true);
        } else if (role === "Admin") {
          setAdmin(true);
        } else {
          setMember(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const youtubeOptions = {
    width: "95%",
  };
  const updatedetails = () => {
    history.push("/updatematerial");
  };
  const deletedetails = async () => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios.delete(
        `https://grssprojectserver.herokuapp.com/techMaterial/`,
        config
      );
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="material-header">Publications</div>
            <br></br>
            <br></br>
            {error ? (
              <div>Data Not Found </div>
            ) : (
              <ul className="material-content">
                {material.map((materialObj, index) => (
                  <ViewNP
                    materialtype="Publication"
                    materialfile={materialObj.materialfile}
                    _id={materialObj._id}
                    title={materialObj.title}
                    publicationlink={materialObj.publicationlink}
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

export default Publication;
