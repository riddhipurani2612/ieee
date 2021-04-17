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
const MemberView = (props) => {
  const [viewReadMode, setViewReadMore] = useState(false);
  let name = props.first_name + " " + props.last_name;
  useEffect(() => {
    if (props.about != null) {
      setViewReadMore(true);
    }
  });
  const [showModal, setModal] = useState(false);
  return (
    <Styles>
      <AboutView
        show={showModal}
        closeModal={() => setModal(false)}
        onHide={() => setModal(false)}
        name={name}
        about={props.about}
      ></AboutView>
      <b>
        {props.first_name} {props.last_name}
      </b>
      <br></br>
      {props.designation} <br></br>
      {props.workplace}
      <br></br>
      {props.contact} <br></br>
      {props.email}<br></br>
      {viewReadMode && <Button
        variant="outline-light"
        onClick={() => setModal(true)}
        title="Feedback"
      >Know More</Button>}
      <br></br>
      <br></br>
    </Styles>
  );
};
export default MemberView;