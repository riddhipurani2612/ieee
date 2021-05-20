import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import AboutView from "../components/AboutView";
import { useHistory } from "react-router";
import axios from "axios";
import "animate.css/animate.min.css";
import "./main.css";
const Styles = styled.div``;
const UpcomingEventView = (props) => {
  const history = useHistory();
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;

  const [viewReadMode, setViewReadMore] = useState(false);
  useEffect(async () => {
    if (props.about != null) {
      setViewReadMore(true);
    }
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
  },[]);
  const [showModal, setModal] = useState(false);
  const updatedetails = () => {
    localStorage.setItem("eventIdUpdate", props._id);
    history.push("/updateevent");
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

  return (
    <Styles className="my-5">
      <AboutView
        show={showModal}
        closeModal={() => setModal(false)}
        onHide={() => setModal(false)}
        name={props.name}
        about={props.about}
      ></AboutView>

      <Row className="mx-2">
        <div className="my-3"> </div>
        {props.eventimage != "undefined" && (
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <img
              src={props.eventimage}
              style={{ marginRight: "2rem", marginBottom: "2rem" }}
              height="250rem"
              width="200rem"
              alt={props.eventimage}
            />
          </Col>
        )}

        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 1 }}
          className="event-content"
        >
          <div style={{ fontWeight: "500" }}>{props.name}</div>
          <br></br>
          By {props.hostedby} <br></br>
          {props.date}
          <br></br>
          {viewReadMode && (
            <button
              className="event-button"
              onClick={() => setModal(true)}
              title="Feedback"
            >
              Know More
            </button>
          )}
          {!student && (
            <button className="event-button" onClick={updatedetails}>
              <i class="fa fa-edit" aria-hidden="true"></i>
            </button>
          )}
          {!student && (
            <button onClick={deletedetails} className="event-button">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          )}
        </Col>
      </Row>
      <hr></hr>
    </Styles>
  );
};
export default UpcomingEventView;
