import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Button, Modal, ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
  .content {
    max-width: 500px;
    margin: auto;
    padding: 50px;
  }
`;
const UpdateMeeting = () => {
  const [meetingData, setMeetingData] = useState({});
  const meetingValueChanged = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };
  const { date, place, attendees, summary, purpose, minutes } = meetingData;
  const history = useHistory();
  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    const extension = file.split(".").pop();
    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "bmp" ||
      extension === "png" ||
      extension === "xls" ||
      extension === "xlsx" ||
      extension === "ods"
    ) {
      setFile(file); // storing file
      setCheckFile(true);
    } else {
      alert("Uploaded File type invalid");
    }
  };
  const updatedetails = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("date", date);
    data.append("place", place);
    data.append("attendees", attendees);
    data.append("summary", summary);
    data.append("purpose", purpose);
    data.append("minutes", minutes);
    data.append("file", file);

    let response;
    try {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      response = await axios.patch(
        `http://localhost:5000/meeting/${localStorage.getItem(
          "meetingUpdate"
        )}`,
        data,
        config,
        {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%";
            setProgess(progress);
          },
        }
      );
      console.log(response.data);
      history.push("/viewmeeting");
    } catch (err) {
      console.log(err.response.data);
      console.log(err.request);
      console.log(err.data);
    }
  };
  useEffect(async () => {
    const token = localStorage.getItem("token");

    let response;
    if (localStorage.getItem("meetingUpdate")) {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        response = await axios.get(
          `http://localhost:5000/meeting/${localStorage.getItem(
            "meetingUpdate"
          )}`,
          config
        );
        setMeetingData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err.response);
      }
    }
  }, []);
  return (
    <Styles>
      <Container className="main-bg text">
        <div
          className="display-3 text-center"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Add Meeting Details
        </div>
        <br></br>
        <div className="content w3-panel w3-border w3-border-white">
          <Form>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                onChange={(e) => {
                  setMeetingData({ ...meetingData, date: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                name="place"
                value={place}
                onChange={(e) => {
                  setMeetingData({ ...meetingData, place: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Purpose</Form.Label>
              <Form.Control
                type="text"
                name="purpose"
                value={purpose}
                onChange={(e) => {
                  setMeetingData({ ...meetingData, purpose: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>No of members attended</Form.Label>
              <Form.Control
                type="number"
                name="attendees"
                value={attendees}
                onChange={(e) => {
                  setMeetingData({ ...meetingData, attendees: e.target.value });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Summary</Form.Label>
              <Form.Control
                as="textarea"
                name="summary"
                value={summary}
                onChange={(e) => {
                  setMeetingData({ ...meetingData, summary: e.target.value });
                }}
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
                onChange={(e) => {
                  setMeetingData({ ...meetingData, minutes: e.target.value });
                }}
                row={30}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload Sign File</Form.Label>
              <br></br>
              <input
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/*"
                ref={el}
                onChange={handleChange}
              />
            </Form.Group>
            <ProgressBar now={progress} label={`${progress}%`} />
            <Button
              variant="outline-light"
              style={{
                width: "100%",
                padding: "14px 28px",
                "font-size": "16px",
                cursor: "pointer",
              }}
              onClick={updatedetails}
            >
              Update Meeting
            </Button>
          </Form>
        </div>
      </Container>
    </Styles>
  );
};
export default UpdateMeeting;
