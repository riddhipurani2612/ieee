import React, { useState, useEffect } from "react";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: 0px;
  }
  .text {
    color: #dbf1fb;
  }
  .hr {
    border-color: white;
  }
  .meeting-content {
  }
`;
const MeetingDetails = (props) => {
  const history = useHistory();
  let link;
  const updatedetails = (e) => {
    e.preventDefault();
    localStorage.setItem("meetingUpdate", props._id);
    history.push("/updatemeeting");
  };
  const deletedetails = (e) => {
    e.preventDefault();
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios.delete(
        `http://localhost:5000/meeting/${props._id}`,
        config
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };
  let [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (props.role === "Admin") {
      setAdmin(true);
    }
    console.log(admin);
  });
  return (
    <Styles>
      <div>
        <Row>
          <Col>
            {props.date != "undefined" ? (
              <div className="meeting-content">
                <span className="meeting-content">Date : </span>
                <span>{props.date}</span>
              </div>
            ) : (
              "Not Defined"
            )}
            <span className="meeting-content">Place : </span>{" "}
            {props.place != "undefined" ? props.place : "Not Defined"}
            <br></br>
            <span className="meeting-content">No of Attendees : </span>{" "}
            {props.attendees != "undefined" ? props.attendees : "Not Defined"}
            <br></br>
            <span className="meeting-content">Summary : </span>{" "}
            {props.summary != "undefined" ? props.summary : "Not Defined"}
            <br></br>
            <span className="meeting-content">Agenda : </span>{" "}
            {props.purpose != "undefined" ? props.purpose : "Not Defined"}
            <br></br>
            <span className="meeting-content">Minutes taken : </span>{" "}
            {props.minutes != "undefined" ? props.minutes : "Not Defined"}
            <br></br>
            <span className="meeting-content">Place : </span>{" "}
            {props.place != "undefined" ? props.place : "Not Defined"}
            <br></br>
            {admin &&
              (props.sign != "undefined" ? (
                <dvi>
                  <span className="meeting-content">List of Attendees</span>
                  <a href={props.sign} target="blank">
                    <button className="meeting-button" onClick={props.sign}>
                      Click Here
                    </button>
                  </a>
                </dvi>
              ) : (
                "Not Defined"
              ))}
          </Col>
          <Col xs lg="2">
            {admin && (
              <button className="meeting-button" onClick={updatedetails}>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </button>
            )}
            {admin && (
              <button className="meeting-button" onClick={deletedetails}>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            )}
          </Col>
        </Row>
        <hr></hr>
      </div>
    </Styles>
  );
};
export default MeetingDetails;
