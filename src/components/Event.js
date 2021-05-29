import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import EventView from "./EventView";
import "./main.css";
const Styles = styled.div``;
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
  const dateFormate = (date) => {
    var temp = date.split("T");
    return temp[0];
  };
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="event-header"> Events</div>

            {events.map((eventObj, index) => (
              <EventView
                _id={eventObj._id}
                name={eventObj.eventname}
                date={dateFormate(eventObj.date)}
                about={eventObj.about}
                hostedby={eventObj.hostedby}
                eventimage={links(eventObj.eventimage)}
              />
            ))}
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default Events;
