import React, { useEffect, useState, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
`;

const Meetings = () => {
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
    data.append("date",date);
    data.append("place", place);
    data.append("attendees",attendees);
    data.append("summary",summary);
    data.append("purpose",purpose);
    data.append("minutes",minutes);
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
            <Form.Label>Upload Sign File</Form.Label>
            <input type="file" ref={el} onChange={handleChange} />
          </Form.Group>
          <div className="progessBar" style={{ width: progress }}>
            {progress}
          </div>
          <Button onClick={addMeeting}>Add Meeting</Button>
        </Form>
      </Container>
    </Styles>
  );
};
export default Meetings;
