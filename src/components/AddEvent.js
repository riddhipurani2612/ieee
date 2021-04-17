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
`;
const AddEvent = () => {
  let response;
  const history = useHistory();
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    if(token === null){
      history.push("/");
    }
    try {
      response = await axios.get(`http://localhost:5000/user/getrole`, config);
      console.log(response.data);
      if (response.data != "Admin") {
        history.push("/");
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
    setFile(file); // storing file
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
      response = await axios.post("http://localhost:5000/event", formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgess(progress);
        },
      });
      console.log(response.status);
      if(response.status == 200){
        alert("Event Added");
        history.push("/");
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Styles>
      <Container className="main-bg text">
      <div className="display-3 text-center" style={{ color: "#ECC30B", textDecoration: "underline" }}>Add Event</div>
        <Form>
          <Form.Group>
            <Form.Label>Event Name : </Form.Label>
            <Form.Control
              type="text"
              name="eventname"
              value={eventname}
              onChange={valueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Date : </Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={valueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Time : </Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={time}
              onChange={valueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>About : </Form.Label>
            <Form.Control
              type="text"
              name="about"
              value={about}
              onChange={valueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Hosted By : </Form.Label>
            <Form.Control
              type="text"
              name="hostedby"
              value={hostedby}
              onChange={valueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Registration Link : </Form.Label>
            <Form.Control
              type="text"
              name="registrationlink"
              value={registrationlink}
              onChange={valueChanged}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Upload Event Image : </Form.Label>
            <input
              type="file"
              accept="application/pdf"
              ref={el}
              onChange={handleChange}
            />
          </Form.Group>
          <ProgressBar now={progress} label={`${progress}%`} />
          <Button onClick={addevent}>Add Event</Button>
        </Form>
      </Container>
    </Styles>
  );
};
export default AddEvent;