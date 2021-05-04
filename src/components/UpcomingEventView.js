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
        <div className="text">
          <Row>
            <Col>
              <h5>{props.name}</h5>
              By {props.hostedby}
              on {props.date}
              at {props.time}
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
            <Col>
              {props.registrationlink != "undefined" ? 
                <a href={props.registrationlink} target="blank">
                  <Button
                    variant="outline-light"
                    onClick={props.registrationlink}
                  >
                    Register Here!
                  </Button>
                </a>
               : (
                "Not Defined"
              )}
              {props.registrationlink != "undefined"
                ? props.registrationlink
                : "Not Defined"}
            </Col>
          </Row>
        </div>
        <hr color="grey"></hr>
      </ScrollAnimation>
    </Styles>
  );
};

export default UpcomingEventView;
