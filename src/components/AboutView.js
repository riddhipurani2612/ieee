import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import "animate.css/animate.min.css";
import "./main.css";
const Styles = styled.div`
`;
const AboutView = (props) => {
  return (
    <Styles className="main-bg">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="main-bg content">
            {props.eventimg && (
              <div class="wrap">
                <img
                  src={props.eventimg}
                  style={{ marginRight: "2rem", marginBottom: "2rem" }}
                  height="300rem"
                />
              </div>
            )}
            <p className="wrap custom-text ">{props.about}</p>
          </div>
        </Modal.Body>
      </Modal>
    </Styles>
  );
};
export default AboutView;