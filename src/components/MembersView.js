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

  const deleteuser = async () => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios.delete(
        `https://grssprojectserver.herokuapp.com/user/${props.email}`,
        config
      );
      if (response.data && response.statusText === "OK") {
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      <Col className="member-content">
        Name : {props.first_name} {props.last_name}
        <br></br>
        Contact : {props.contact}
        <br></br>
        Member Id : {props.memberid}
        <br></br>
        Email : {props.email}
        <br></br>
        Workplace : {props.workplace}
        <br></br>
        Grade : {props.designation}
        <br></br>
      </Col>
      <Col>
        {admin === "Admin" ? (
          <div>
            <button className="member-button" onClick={deleteuser(props.email)}>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        ) : null}
      </Col>
    </Styles>
  );
};
export default MembersView;
