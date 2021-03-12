import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const Styles = styled.div`
  .main-bg {
    background-color: #429eb3;
    border: 1px solid white;
  }
  .text {
    color: #dbf1fb;
  }
`;
const UpcomingEventView = (props) => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <span>{props.about}</span>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <Styles>
      <ScrollAnimation
        animateIn="animate__lightSpeedInRight"
        animateOut="animate__lightSpeedOutRight"
      >
        <div className="text main-bg text-justify">
          <Row className="my-3">
            <Col>
              {props.date} <br></br>
              {props.time}
            </Col>
            <Col xs={6}>
              <h3>
                <b>{props.name}</b>
              </h3>
              By<br></br>
              {props.hostedby}
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
            </Col>
            <Col xs lg="2">
              <a href={props.registrationlink} target="blank">
                Register here
              </a>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    </Styles>
  );
};

export default UpcomingEventView;
