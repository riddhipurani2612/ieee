import React, { useState, useEffect } from "react";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
const Styles = styled.div``;
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
        `https://grssprojectserver.herokuapp.com/meeting/${props._id}`,
        config
      );
      if (response.data && response.statusText === "OK") {
        window.location.reload(false);
      }
      else{
        alert("Error while deleting!! Try again!")
      }
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
            <span className="meeting-content">Place : </span>
            {props.place != "undefined" ? (
              <span className="meeting-content">{props.place}</span>
            ) : (
              "Not Defined"
            )}
            <br></br>
            <span className="meeting-content">No of Attendees : </span>
            {props.attendees != "undefined" ? (
              <span className="meeting-content">{props.attendees}</span>
            ) : (
              "Not Defined"
            )}
            <br></br>
            <span className="meeting-content">Summary : </span>{" "}
            {props.summary != "undefined" ? (
              <span className="meeting-content">{props.summary}</span>
            ) : (
              "Not Defined"
            )}
            <br></br>
            <span className="meeting-content">Agenda : </span>{" "}
            {props.purpose != "undefined" ? (
              <span className="meeting-content">{props.purpose}</span>
            ) : (
              "Not Defined"
            )}
            <br></br>
            <span className="meeting-content">Minutes taken : </span>{" "}
            {props.minutes != "undefined" ? (
              <span className="meeting-content">{props.minutes}</span>
            ) : (
              "Not Defined"
            )}
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
              ) : null)}
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
