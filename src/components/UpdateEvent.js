import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Container, Row, Col, ProgressBar, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Styles = styled.div``;
const UpdateEvent = (props) => {
  const [events, setEvents] = useState({});
  const {
    eventname,
    date,
    time,
    about,
    hostedby,
    registrationlink,
    eventimage,
  } = events;
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
    if (file != undefined && file != "") {
      const extension = file.name.split(".").pop() + "";
      if (
        extension === "jpg" ||
        extension === "jpeg" ||
        extension === "bmp" ||
        extension === "png"
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
  const updatedetails = async (e) => {
    try {
      e.preventDefault();
      let formData = new FormData();
      formData.append("eventname", eventname);
      formData.append("date", date.toString());
      formData.append("about", about);
      formData.append("registrationlink", registrationlink);
      formData.append("hostedby", hostedby);
      if (file != "") {
        formData.append("file", file);
      } else {
        formData.append("file", eventimage);
      }
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let response;
      try {
        response = await axios
          .patch(
            `https://grssprojectserver.herokuapp.com/event/${localStorage.getItem(
              "eventIdUpdate"
            )}`,
            formData,
            config,
            {
              onUploadProgress: (ProgressEvent) => {
                let progress =
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) + "%";
                setProgess(progress);
              },
            }
          )
          .catch((err) => {
            if (err.response) {
              setStatus("Error");
              setError(err.response.data.msg);
              console.log(err.response.data.msg);
            }
          });
        if (response.data && response.statusText === "OK") {
          setStatus("Success");
        }
      } catch (err) {
        console.log(err.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    let response;
    if (localStorage.getItem("eventIdUpdate")) {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        response = await axios.get(
          `https://grssprojectserver.herokuapp.com/event/get/${localStorage.getItem(
            "eventIdUpdate"
          )}`,
          config
        );
        if (response.data && response.statusText === "OK") {
          setEvents(response.data);
        }
      } catch (err) {
        console.log(err);
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
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="form-box w3-panel w3-border w3-border-white boxshadow">
            <div className="event-header">Update Event</div>
            <br></br>
            <div className="event-form">
              <br></br>
              <form onSubmit={updatedetails}>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Event Name : </label>
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    <Col>
                      <input
                        placeholder="Enter Event Name"
                        type="text"
                        name="eventname"
                        value={eventname}
                        onChange={(e) => {
                          setEvents({ ...events, eventname: e.target.value });
                        }}
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
                        value={dateFormate(date)}
                        onChange={(e) => {
                          setEvents({ ...events, date: e.target.value });
                        }}
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
                        type="text"
                        name="about"
                        value={about}
                        onChange={(e) => {
                          setEvents({ ...events, about: e.target.value });
                        }}
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
                        type="text"
                        name="hostedby"
                        value={hostedby}
                        onChange={(e) => {
                          setEvents({ ...events, hostedby: e.target.value });
                        }}
                        required
                      ></input>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col sm="4">
                      <label>Registration Link : </label>
                    </Col>
                    <Col>
                      <input
                        type="url"
                        placeholder="Enter URL"
                        name="registrationlink"
                        value={registrationlink}
                        onChange={(e) => {
                          setEvents({
                            ...events,
                            registrationlink: e.target.value,
                          });
                        }}
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
                    Uploaded file format not supported. Please upload only image
                    or zip file
                  </Alert>
                ) : null}
                <button
                  className="event-button"
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                >
                  Update Event
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
export default UpdateEvent;
