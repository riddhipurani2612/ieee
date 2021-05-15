import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import MeetingDetails from "./MeetingDetails";
import { useHistory } from "react-router-dom";
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
  table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
  }
  Col {
    padding: 15px;
  }
`;
const MeetingView = () => {
  const history = useHistory();
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;

  const [meetings, setMeetings] = useState([]);
  const { date, place, attendees, summary, purpose, minutes, sign } = meetings;
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
    if (role === "Student") {
      history.push("/");
    } else {
      try {
        let response;
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        response = await axios.get("http://localhost:5000/meeting", config);
        setMeetings(response.data);
        console.log(meetings);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "http://localhost:5000/" + temp;
    }
  };
  return (
    <Styles>
      <Container className="main-bg text">
        <br></br>
        <div className="w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Meetings
          </div>
          {meetings.map((meetingObj, index) => (
            <MeetingDetails
              _id={meetingObj._id}
              role={role}
              date={meetingObj.date}
              place={meetingObj.place}
              attendees={meetingObj.attendees}
              summary={meetingObj.summary}
              purpose={meetingObj.purpose}
              minutes={meetingObj.minutes}
              sign={links(meetingObj.sign)}
            />
          ))}
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default MeetingView;
