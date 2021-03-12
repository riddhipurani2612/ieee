import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
`;
const AddEvent = () => {
  const [events, setEvents] = useState({});
  const valueChanged = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value });
  };
  const { eventname, date, time, about, hostedby, registrationlink } = events;
  const addevent = async (e) => {
    e.preventDefault();
    let data = {
        eventname,
        date,
        time,
        about,
        hostedby,
        registrationlink
      };
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
   let response;
    try {
        response = await axios.post("http://localhost:5000/event",data,config);
        console.log(response.data);

    } catch (error) {
        console.log(error);
    }
  };
  return (
    <Styles>
      <Container className="main-bg text">
        <div className="display-3 text text-center">Add Event</div>
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
          <Button onClick={addevent}>Add Event</Button>
        </Form>
      </Container>
    </Styles>
  );
};
export default AddEvent;
