import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";
import UpdateMaterial from "./UpdateMaterial";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
  .youtubeOptions {
    width: "100%";
    height: "400rem";
  }
`;
const MaterialView = (props) => {
  const history = useHistory();
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;

  const youtubeOptions = {
    width: "100%",
    height: "400rem",
  };
  const viewdetails = () => {
    localStorage.setItem("materialId", props._id);
    history.push("/detailedview");
  };
  const updatedetails = () =>{
    localStorage.setItem("materialIdUpdate", props._id);
    history.push("/updatematerial");
  }
  const deletedetails = async () => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios.delete(
        `http://localhost:5000/techMaterial/${props._id}`,
        config
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    const token = localStorage.getItem("token");

    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      let response = await axios.get(
        `http://localhost:5000/user/getrole`,
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
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg text my-5" style={{ color: "white" }}>
        {props.title}
        <Button onClick={viewdetails} variant="outline-light" className="mx-5">
          View &gt;&gt;
        </Button>
        {member && (
          <Button
            className="mt-5"
            variant="outline-light"
            onClick={updatedetails}
            title="Feedback"
          >
            Update
          </Button>
        )}
        {
          <Button
            onClick={deletedetails}
            variant="outline-light"
            className="mx-5"
          >
            Delete &gt;&gt;
          </Button>
        }
        <hr color="grey"></hr>
      </Container>
    </Styles>
  );
};
export default MaterialView;
