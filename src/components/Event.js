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
  const [error, setError] = useState(false);
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      response = await axios.get(
        "http://localhost:5000/event/passed",
        config
      );
      if (response.data && response.statusText === "OK") {
        setEvents(response.data);
      }
      if (events === []) {
        setError(true);
      }
    } catch (err) {
      setError(true)
    }
  }, []);
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "http://localhost:5000/" + temp;
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
            <div>
              {error ? (
                <div> Data Not Received</div>
              ) : (
                <div>
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
              )}
            </div>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default Events;
