import React, { useEffect, useState, useRef } from "react";
import { Container, Form, Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
`;

const Meetings = () => {
  const history= useHistory();
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    console.log(token);
    if(token === null){
      history.push("/");
    }
    try {
      let response = await axios.get(`http://localhost:5000/user/getrole`, config);
      console.log(response.data);
      if (response.data != "Admin") {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [meetingData, setMeetingData] = useState({});
  const meetingValueChanged = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  const { date, place, attendees, summary, purpose, minutes } = meetingData;
  const [file, setFile] = useState("");
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  };
  const addMeeting = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("date", date);
    data.append("place", place);
    data.append("attendees", attendees);
    data.append("summary", summary);
    data.append("purpose", purpose);
    data.append("minutes", minutes);
    data.append("file", file);

    let response;
    try {
      response = await axios.post("http://localhost:5000/meeting", data, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgess(progress);
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      <Container>
        <h1>Enter Meeting Details</h1>
        <Form>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={meetingValueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              name="place"
              value={place}
              onChange={meetingValueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Purpose</Form.Label>
            <Form.Control
              type="text"
              name="purpose"
              value={purpose}
              onChange={meetingValueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>No of members attended</Form.Label>
            <Form.Control
              type="number"
              name="attendees"
              value={attendees}
              onChange={meetingValueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              as="textarea"
              name="summary"
              value={summary}
              onChange={meetingValueChanged}
              row={30}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Minutes taken</Form.Label>
            <Form.Control
              type="number"
              name="minutes"
              value={minutes}
              placeholder="0min"
              onChange={meetingValueChanged}
              row={30}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Upload Sign File</Form.Label><br></br>
            <input
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/*"
              ref={el}
              onChange={handleChange}
            />
          </Form.Group>
          <ProgressBar now={progress} label={`${progress}%`}/>
          <Button onClick={addMeeting}>Add Meeting</Button>
        </Form>
      </Container>
    </Styles>
  );
};
export default Meetings;
