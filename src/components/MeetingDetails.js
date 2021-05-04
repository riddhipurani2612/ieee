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
  .label{
    
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
        `https://grssprojectserver.herokuapp.com/meeting/${props._id}`,
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
              <div>
                <span className="label">Date : </span>
                <span>{props.date}</span>
              </div>
            ) : (
              "Not Defined"
            )}
            <span className="label">Place : </span>{" "}
            {props.place != "undefined" ? props.place : "Not Defined"}
            <br></br>
            <span className="label">No of Attendees : </span>{" "}
            {props.attendees != "undefined" ? props.attendees : "Not Defined"}
            <br></br>
            <span className="label">Summary : </span>{" "}
            {props.summary != "undefined" ? props.summary : "Not Defined"}
            <br></br>
            <span className="label">Agenda : </span>{" "}
            {props.purpose != "undefined" ? props.purpose : "Not Defined"}
            <br></br>
            <span className="label">Minutes taken : </span>{" "}
            {props.minutes != "undefined" ? props.minutes : "Not Defined"}
            <br></br>
            <span className="label">Place : </span>{" "}
            {props.place != "undefined" ? props.place : "Not Defined"}
            <br></br>
            {admin &&
              (props.sign != "undefined" ? (
                <dvi>
                  <span className="label">List of Attendees</span>
                  <a href={props.sign} target="blank">
                    <Button variant="outline-light" onClick={props.sign}>
                      Click Here
                    </Button>
                  </a>
                </dvi>
              ) : (
                "Not Defined"
              ))}
          </Col>
          <Col xs lg="2">
            {admin && (
              <Button variant="outline-light" onClick={updatedetails}>
                Update
              </Button>
            )}
            {admin && (
              <Button variant="outline-light" onClick={deletedetails}>
                Delete
              </Button>
            )}
          </Col>
        </Row>
        <hr></hr>
      </div>
    </Styles>
  );
};
export default MeetingDetails;
