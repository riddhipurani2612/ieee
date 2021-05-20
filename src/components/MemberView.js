import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import AboutView from "../components/AboutView";
import "animate.css/animate.min.css";
import "./main.css";
const Styles = styled.div``;
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
      <div>
        <AboutView
          show={showModal}
          closeModal={() => setModal(false)}
          onHide={() => setModal(false)}
          name={name}
          about={props.about}
        ></AboutView>
        <Card key={props.index} className="main-bg">
          <Card.Img variant="top" src={props.profile} />
          <Card.Body className="member-content">
            <Card.Title>
              {props.first_name} {props.last_name}
            </Card.Title>
            <Card.Text>
              {props.designation} <br></br>
              {props.workplace}
              <br></br>
              {props.contact} <br></br>
              {props.email}
              <br></br>
              {viewReadMode && (
                <button
                  className="member-button"
                  onClick={() => setModal(true)}
                >
                  Know More
                </button>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Styles>
  );
};
export default MemberView;
