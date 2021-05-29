import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Row, Col, ProgressBar, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Styles = styled.div``;
const UpdateMeeting = () => {
  const [meetingData, setMeetingData] = useState({});
  const meetingValueChanged = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };
  const { date, place, attendees, summary, purpose, minutes, sign } =
    meetingData;
  const history = useHistory();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const [file, setFile] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    console.log(file);
    const extension = file.name.split(".").pop() + "";
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
      setStatus("Warning");
      alert(`${extension} file is not allowed`);
      e.target.value = null;
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
    if (file != "") {
      data.append("file", file);
    } else {
      data.append("file", sign);
    }
    let response;
    try {
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      response = await axios.patch(
        `https://grssprojectserver.herokuapp.com/meeting/${localStorage.getItem(
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
      if (response.statusText === "OK") {
        setStatus("Success");
      } else {
        setStatus("Warning");
        setError(response.data.message);
      }
    } catch (err) {
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
          `https://grssprojectserver.herokuapp.com/meeting/${localStorage.getItem(
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
  const dateFormate = (date) => {
    if (date != undefined) {
      var temp = date.split("T");
      return temp[0];
    }
  };
  return (
    <Styles>
      <div>
        <Container className="main-bg">
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="meeting-header">Update Meeting</div>
            <form onSubmit={updatedetails} className="meeting-form">
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Date</label>
                  </Col>
                  <Col>
                    <input
                      type="date"
                      name="date"
                      value={dateFormate(date)}
                      onChange={(e) => {
                        setMeetingData({
                          ...meetingData,
                          date: e.target.value,
                        });
                      }}
                      required
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Place</label>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      name="place"
                      value={place}
                      onChange={(e) => {
                        setMeetingData({
                          ...meetingData,
                          place: e.target.value,
                        });
                      }}
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Purpose</label>
                  </Col>
                  <Col>
                    <textarea
                      className="textarea"
                      row={30}
                      name="purpose"
                      value={purpose}
                      onChange={(e) => {
                        setMeetingData({
                          ...meetingData,
                          purpose: e.target.value,
                        });
                      }}
                    ></textarea>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>No of members attended</label>
                  </Col>
                  <Col>
                    <input
                      type="number"
                      min="2"
                      name="attendees"
                      value={attendees}
                      onChange={(e) => {
                        setMeetingData({
                          ...meetingData,
                          attendees: e.target.value,
                        });
                      }}
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Summary</label>
                  </Col>
                  <Col>
                    <textarea
                      className="textarea"
                      name="summary"
                      value={summary}
                      onChange={(e) => {
                        setMeetingData({
                          ...meetingData,
                          summary: e.target.value,
                        });
                      }}
                      row={30}
                    ></textarea>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Minutes taken</label>
                  </Col>
                  <Col>
                    <input
                      type="number"
                      name="minutes"
                      value={minutes}
                      placeholder="0min"
                      onChange={(e) => {
                        setMeetingData({
                          ...meetingData,
                          minutes: e.target.value,
                        });
                      }}
                      row={30}
                    ></input>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm="4">
                    <label>Upload Sign File</label>
                  </Col>
                  <Col>
                    <input
                      type="file"
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/*"
                      ref={el}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
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
                  Uploaded file format not supported. Please upload only image
                  file
                </Alert>
              ) : null}

              <button
                className="meeting-button"
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  "font-size": "16px",
                  cursor: "pointer",
                }}
              >
                Update Meeting
              </button>
            </form>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default UpdateMeeting;
