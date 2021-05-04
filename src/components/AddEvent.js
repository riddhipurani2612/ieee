import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Form, Button, Container, ProgressBar } from "react-bootstrap";
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
const AddEvent = () => {
  let response;
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
    }
    try {
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user/getrole`, config);
      console.log(response.data);
      if (response.data.role != "Admin") {
        history.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [file, setFile] = useState("");
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
      extension === "png"
    ) {
      setFile(file); // storing file
    } else {
      alert("Only Image File Allowed");
    }
  };
  const [events, setEvents] = useState({});
  const valueChanged = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value });
  };
  const { eventname, date, time, about, hostedby, registrationlink } = events;
  const addevent = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("eventname", eventname);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("about", about);
    formData.append("registrationlink", registrationlink);
    formData.append("hostedby", hostedby);
    formData.append("file", file);
    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    let response;
    try {
      response = await axios.post("https://grssprojectserver.herokuapp.com/event", formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgess(progress);
        },
      });
      console.log(response.status);
      console.log(response.data);
      history.push("/events");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Styles>
      <Container className="main-bg text">
        <br></br>
        <div className="content w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Add Event
          </div>
          <br></br>
          <div>
            <Form>
              <Form.Group>
                <Form.Label>Event Name : </Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  name="eventname"
                  value={eventname}
                  onChange={valueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Event Date : </Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="date"
                  name="date"
                  value={date}
                  onChange={valueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Time : </Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="time"
                  name="time"
                  value={time}
                  onChange={valueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>About : </Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  name="about"
                  value={about}
                  onChange={valueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Hosted By : </Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  name="hostedby"
                  value={hostedby}
                  onChange={valueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Registration Link : </Form.Label>
                <input
                  class="w3-input w3-animate-input"
                  type="text"
                  name="registrationlink"
                  value={registrationlink}
                  onChange={valueChanged}
                ></input>
              </Form.Group>
              <Form.Group>
                <Form.Label>Upload Event Image : </Form.Label>
                <input
                  type="file"
                  accept="image/*"
                  ref={el}
                  onChange={handleChange}
                />
              </Form.Group>
              {checkFile && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
              <br></br>
              <Button
                variant="outline-light"
                onClick={addevent}
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  "font-size": "16px",
                  cursor: "pointer",
                }}
              >
                Add Event
              </Button>
            </Form>
          </div>
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default AddEvent;
