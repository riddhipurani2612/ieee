import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import EventView from "./EventView";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: 0px;
  }
  .text {
    color: #dbf1fb;
  }
  .hr {
    border-color: white;
  }
`;
const Events = () => {
  const [events, setEvents] = useState([]);
  const { eventname, date, about, hostedby } = events;
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      response = await axios.get("http://localhost:5000/event", config);
      setEvents(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Styles>
        <Container className="main-bg text">
        <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Events
          </div>

          {events.map((eventObj, index) => (
            <EventView
              name={eventObj.eventname}
              date={eventObj.date}
              about={eventObj.about}
              hostedby={eventObj.hostedby}
            />
          ))}
        </Container>
    </Styles>
  );
};
export default Events;
