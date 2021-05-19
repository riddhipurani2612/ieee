import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./main.css";
const Styles = styled.div``;
const UpcomingEventView = (props) => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <span>{props.about}</span>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  const [link, setLink] = useState(false);
  useEffect(() => {
    console.log(props.registrationlink);
    if (props.registrationlink != "undefined") {
      setLink(true);
    }
  }, []);
  return (
    <Styles>
      <Row>
        <Col md={20} xs={9}>
          <div className="event-header">{props.name}</div>
          <br></br>
          <div className="event-content">
            By {props.hostedby}&nbsp; on {props.date}&nbsp; at {props.time}
            <br></br>
            <a
              className="read-more-link text"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {linkName}
            </a>
            {readMore && extraContent}
          </div>
        </Col>
        <Col md={2} xs={1}>
          {props.registrationlink != "undefined" ? (
            <a href={props.registrationlink} target="blank">
              <Button className="button" onClick={props.registrationlink}>
                Register Here!
              </Button>
            </a>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Styles>
  );
};
export default UpcomingEventView;
