import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import EventView from "./EventView";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
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
      response = await axios.get("https://grssprojectserver.herokuapp.com/event", config);
      setEvents(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };

  return (
    <Styles>
      <Container className="main-bg text">
        <br></br>
        <div className="w3-panel w3-border w3-border-white">
          <div
            className="display-3 text-center "
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
              eventimage={links(eventObj.eventimage)}
            />
          ))}
        </div>
        <br></br>
      </Container>
    </Styles>
  );
};
export default Events;
