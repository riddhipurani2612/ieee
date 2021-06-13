import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import MeetingDetails from "./MeetingDetails";
import { useHistory } from "react-router-dom";
import "./main.css";
const Styles = styled.div``;
const MeetingView = () => {
  const history = useHistory();
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;
  const [error, setError] = useState(false);
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
      if (token != null) {
        let response = await axios.get(
          `http://localhost:5000/user/getrole`,
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
        response = await axios.get(
          "http://localhost:5000/meeting",
          config
        );
        if (response.data && response.statusText === "OK") {
          setMeetings(response.data);
        }
        if (meetings === []) {
          setError(true);
        }
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
  const dateFormate = (date) => {
    var temp = date.split("T");
    return temp[0];
  };
  const [sort, setSort] = useState("");
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="meeting-header">
              <Row>
                <Col></Col>
              </Row>
              Meetings
            </div>
            <div style={{ float: "right" }}>
              Sort :
              <select
                onChange={(e) => setSort(e.target.value)}
                style={{ float: "right" }}
              >
                <option value="" selected>
                  -- Select --
                </option>
                <option value="Descending">Oldest First</option>
                <option value="Ascending">Newst First</option>
              </select>
            </div>
            <br></br>
            {error ? (
              <div> Data Not Received</div>
            ) : (
              <div>
                {sort === "Ascending" ? (
                  <div>
                    {meetings
                      .slice(0)
                      .reverse()
                      .map((meetingObj, index) => (
                        <MeetingDetails
                          _id={meetingObj._id}
                          role={role}
                          date={dateFormate(meetingObj.date)}
                          place={meetingObj.place}
                          attendees={meetingObj.attendees}
                          summary={meetingObj.summary}
                          purpose={meetingObj.purpose}
                          minutes={meetingObj.minutes}
                          sign={links(meetingObj.sign)}
                        />
                      ))}
                  </div>
                ) : (
                  <div>
                    {meetings.map((meetingObj, index) => (
                      <MeetingDetails
                        _id={meetingObj._id}
                        role={role}
                        date={dateFormate(meetingObj.date)}
                        place={meetingObj.place}
                        attendees={meetingObj.attendees}
                        summary={meetingObj.summary}
                        purpose={meetingObj.purpose}
                        minutes={meetingObj.minutes}
                        sign={links(meetingObj.sign)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default MeetingView;
