import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import AboutView from "../components/AboutView";
import "animate.css/animate.min.css";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    border: 1px solid white;
  }
  .text {
    color: #dbf1fb;
  }
`;
const UpcomingEventView = (props) => {
  const [viewReadMode, setViewReadMore] = useState(false);
  useEffect(() => {
    if (props.about != null) {
      setViewReadMore(true);
    }
  });
  const [showModal, setModal] = useState(false);
  return (
    <Styles className="my-5">
      <AboutView
        show={showModal}
        closeModal={() => setModal(false)}
        onHide={() => setModal(false)}
        name={props.name}
        about={props.about}
      ></AboutView>

      <Row className="mx-2">
        <div className="my-3"> </div>
        {props.eventimage != "undefined" && <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
          <img
            src={props.eventimage}
            style={{ marginRight: "2rem", marginBottom: "2rem" }}
            height="250rem"
            width="200rem"
            alt={props.eventimage}
          />
        </Col>}
        
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
          <b>{props.name}</b>
          <br></br>
          By {props.hostedby} <br></br>
          {props.date}
          <br></br>
          {viewReadMode && (
            <Button
              variant="outline-light"
              onClick={() => setModal(true)}
              title="Feedback"
            >
              Know More
            </Button>
          )}
        </Col>
      </Row>
      <hr></hr>
    </Styles>
  );
};
export default UpcomingEventView;
