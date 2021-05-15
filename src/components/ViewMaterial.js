import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Button, Row, Col } from "react-bootstrap";
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
const ViewMaterial = (props) => {
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
  const updatedetails = () => {
    localStorage.setItem("materialIdUpdate", props._id);
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
      <div>
        <Row>
          <Col> {props.title}</Col>
          <Col xs lg="3">
            {member && (
              <Button
                variant="outline-light"
                onClick={updatedetails}
                title="Feedback"
              >
                Update
              </Button>
            )}
            {member &&
              <Button
                onClick={deletedetails}
                variant="outline-light"
              >
                Delete
              </Button>
            }
            <Button
              onClick={viewdetails}
              variant="outline-light"
            >
              View
            </Button>
          </Col>
        </Row>
      </div>
      <hr color="grey"></hr>
    </Styles>
  );
};
export default ViewMaterial;
