import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import AboutView from "../components/AboutView";
import "animate.css/animate.min.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./main.css";

const Styles = styled.div``;
const MembersView = (props) => {
  const history = useHistory();

  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  let response;
  const [admin, setAdmin] = useState("");

  useEffect(async () => {
    try {
      response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getrole`,
        config
      );
      if (response.data && response.statusText === "OK") {
        if (response.data.role != "Admin") {
        } else if (response.data.role.includes("Admin")) {
          setAdmin(response.data.role);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const updateuser = async () => {
    localStorage.setItem("userEmailUpdate", props.email);
    history.push("/profile");
  };

  const deleteuser = async () => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios
        .delete(`http://localhost:5000/user/${props.email}`, config)
        .catch((err) => {
          alert(err);
        })
        .then(window.location.reload(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      <Row>
        <Col className="member-content mx-3">
          Name : {props.first_name} {props.last_name}
          <br></br>
          Member Id : {props.memberid}
          <br></br>
          Email : {props.email}
          <br></br>
        </Col>
        {props.role != "Admin" ? (
          <Col md="auto">
            <div>
              <button className="member-button" onClick={deleteuser}>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </Col>
        ) : (
          ""
        )}
        {props.role != "Admin" ? (
          <Col md="auto">
            <div>
              <button onClick={updateuser} className="member-button">
                <i class="fa fa-edit" aria-hidden="true"></i>
              </button>
            </div>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Styles>
  );
};
export default MembersView;
