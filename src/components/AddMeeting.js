import React, { useEffect, useState, useRef } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import "./main.css";
const Styles = styled.div``;

const AddMeeting = () => {
  const [checkFile, setCheckFile] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const history = useHistory();
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    if (token === null || token=== undefined) {
      history.push("/");
    }
    try {
      const response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getrole`,
        config
      );
      if (response.data && response.statusText === "OK") {
        if (!response.data.role.includes("Admin")) {
          history.goBack();
        }
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
  let extension;
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    if (file != undefined && file != "") {
      extension = file.name.split(".").pop() + "";
      if (
        extension === "jpg" ||
        extension === "jpeg" ||
        extension === "bmp" ||
        extension === "png" ||
        extension === "zip" ||
        extension === "rar"
      ) {
        setFile(file); // storing file
        setCheckFile(true);
      } else {
        setStatus("Warning");
        alert(`${extension} file is not allowed`);
        e.target.value = null;
      }
    }
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
      response = await axios
        .post("https://grssprojectserver.herokuapp.com/meeting", data, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%";
            setProgess(progress);
          },
        })
        .catch((err) => {
          if (err.response) {
            setStatus("Error");
            setError(err.response.data.msg);
          }
        });
      if (response.data && response.statusText === "OK") {
        setStatus("Success");
      } else {
        setStatus("Warning");
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles>
      <Container className="main-bg">
        <br></br>
        <div className="form-box w3-panel w3-border w3-border-white boxshadow">
          <div className="meeting-header">Add Meeting</div>
          <br></br>
          <div className="meeting-form">
            <form onSubmit={addMeeting}>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Date</label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={meetingValueChanged}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Place</label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      placeholder="Enter Place"
                      type="text"
                      name="place"
                      value={place}
                      onChange={meetingValueChanged}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Purpose</label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      placeholder="Enter purpose of meeting"
                      type="text"
                      name="purpose"
                      value={purpose}
                      onChange={meetingValueChanged}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>
                      No of <br></br>members attended
                    </label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      placeholder="2"
                      className="w3-input w3-animate-input"
                      type="number"
                      min="2"
                      name="attendees"
                      value={attendees}
                      onChange={meetingValueChanged}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Summary</label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <textarea
                      placeholder="Summary of meeting"
                      className="textarea"
                      name="summary"
                      value={summary}
                      onChange={meetingValueChanged}
                      required
                      row={30}
                    ></textarea>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Upload Sign File</label>
                    <span style={{ color: "red" }}>*</span>
                  </Col>
                  <Col>
                    <input
                      type="file"
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/*"
                      ref={el}
                      onChange={handleChange}
                      required
                      title=""
                    />
                  </Col>
                </Row>
              </Form.Group>
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}

              <br></br>
              {status === "Success" ? (
                <Alert variant="success">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                  Data Uploaded Successfully!!
                </Alert>
              ) : null}
              {status === "Error" ? (
                <Alert variant="danger">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  {error}
                </Alert>
              ) : null}
              {status === "Warning" ? (
                <Alert variant="warning">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  `${extension} file is not allowed`!! Please Upload Compressed
                  or Image file!!
                </Alert>
              ) : null}
              <button
                className="meeting-button"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Add Meeting
              </button>
            </form>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default AddMeeting;
