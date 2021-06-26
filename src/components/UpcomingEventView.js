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
  const [viewReadMode, setViewReadMore] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <span>{props.about}</span>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  const [link, setLink] = useState(false);
  useEffect(() => {
    if (props.registrationlink != "undefined") {
      setLink(true);
    }
  }, []);
  const [showModal, setModal] = useState(false);
  const updatedetails = () => {
    localStorage.setItem("eventIdUpdate", props._id);
    history.push("/updateevent");
  };
  useEffect(async () => {
    if (props.about != null) {
      setViewReadMore(true);
    }
    const token = localStorage.getItem("token");
    if (token != null && token!= undefined || token != undefined) {
      try {
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
        let response = await axios.get(
          `https://grssprojectserver.herokuapp.com/user/getrole`,
          config
        );
        if (response.data && response.statusText === "OK") {
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
    }
  }, []);

  const deletedetails = async () => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios
        .delete(`https://grssprojectserver.herokuapp.com/event/${props._id}`, config)
        .then(history.push("/"));
      if (response.data && response.statusText === "OK") {
        history.push("/");
      }
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
        {props.eventimage != "undefined" && (
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <a href={props.eventimage} target="blank">
              <img
                className="event-img"
                src={props.eventimage}
                alt={props.eventimage}
              />
            </a>
          </Col>
        )}

        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
          <div className="event-form">
            <div className="event-content">{props.name}</div>
            <br></br>
            <div style={{ color: "grey" }}>
              By {props.hostedby} <br></br>
              {props.date}
            </div>
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
            {props.registrationlink != "undefined" &&
            props.registrationlink != undefined &&
            props.registrationlink != "" ? (
              <a href={props.registrationlink} target="blank">
                <button className="event-button" title="Register Here">
                  Registration Link
                </button>
              </a>
            ) : null}
            {role === "Admin" && (
              <button className="event-button" onClick={updatedetails}>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </button>
            )}
            {role === "Admin" && (
              <button onClick={deletedetails} className="event-button">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            )}
          </div>
        </Col>
      </Row>
      <hr></hr>
    </Styles>
  );
};
export default UpcomingEventView;
