import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Alert } from "react-bootstrap";
import axios from "axios";
import "./main.css";
import {
  Form,
  Button,
  Container,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";
const Styles = styled.div`
  .box {
    max-width: 700px;
    margin: auto;
    padding: 50px;
  }
`;
const AddEvent = () => {
  let response;
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [checkFile, setCheckFile] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    if (token === null) {
      history.goBack();
    } else {
      try {
        response = await axios.get(
          `http://localhost:5000/user/getrole`,
          config
        );
        if (response.data && response.statusText === "OK") {
          if (response.data.role != "Admin") {
            history.goBack();
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  const [file, setFile] = useState("");
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    if (file != undefined && file != "") {
      const extension = file.name.split(".").pop() + "";
      if (
        extension === "jpg" ||
        extension === "jpeg" ||
        extension === "bmp" ||
        extension === "png" ||
        extension === "zip"
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
  const [events, setEvents] = useState({});
  const valueChanged = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value });
  };
  const {
    eventname,
    date,
    time,
    about,
    hostedby,
    registrationlink,
    attendees,
  } = events;
  const addevent = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("eventname", eventname);
    formData.append("date", date.toString());
    formData.append("time", time);
    formData.append("about", about);
    formData.append("registrationlink", registrationlink);
    formData.append("hostedby", hostedby);
    formData.append("attendees", attendees);
    formData.append("file", file);
    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    let response;
    try {
      response = await axios
        .post("http://localhost:5000/event", formData, {
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
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="event-header">Add Event</div>
            <br></br>
            <div className="event-form">
              <form onSubmit={addevent}>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label className="font-label">Event Name :</label>
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    <Col>
                      <input
                        placeholder="Enter Event Name"
                        type="text"
                        name="eventname"
                        value={eventname}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Event Date : </label>
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    <Col>
                      <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>About : </label>
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    <Col>
                      <input
                        placeholder="Enter Details of Event"
                        class="w3-input w3-animate-input"
                        type="text"
                        name="about"
                        value={about}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Hosted By : </label>
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    <Col>
                      <input
                        placeholder="Enter Host Name"
                        class="w3-input w3-animate-input"
                        type="text"
                        name="hostedby"
                        value={hostedby}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Registration Link : </label>
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    <Col>
                      <input
                        placeholder="Enter URL"
                        class="w3-input w3-animate-input"
                        type="text"
                        name="registrationlink"
                        value={registrationlink}
                        onChange={valueChanged}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Attendees : </label>
                    </Col>
                    <Col>
                      <input
                        placeholder="2"
                        class="w3-input w3-animate-input"
                        type="number"
                        min="2"
                        name="attendees"
                        value={attendees}
                        onChange={valueChanged}
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Upload Event Image : </label>
                    </Col>
                    <Col>
                      <input
                        type="file"
                        accept="image/*"
                        ref={el}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>
                  <br></br>
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
                    Uploaded file format not supported. Please upload only image
                    or zip file
                  </Alert>
                ) : null}
                <button
                  className="event-button"
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    "font-size": "2rem",
                    cursor: "pointer",
                  }}
                >
                  Add Event
                </button>
              </form>
            </div>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default AddEvent;
