import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import "animate.css/animate.min.css";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    border: 1px solid white;
  }
  .text {
    color: #dbf1fb;
  }
  img {
    float: left;
    margin: 5px;
  }
  .wrap {
    overflow-wrap: break-word;
    spacing: 2rem;
  }
  .custom-text {
    font-size: 140%;
    line-height: 2rem;
  }
`;
const AboutView = (props) => {
  return (
    <Styles>
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
          <div className="display-5 text-justify col-md-12 my-5">
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
