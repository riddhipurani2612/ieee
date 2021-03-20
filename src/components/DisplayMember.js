import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
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
const DisplayMember = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Styles>
      <div className="text main-bg text-justify">
        <h3>
          <b>{props.name}</b>
        </h3>
      </div>
    </Styles>
  );
};

export default DisplayMember;
