import React, { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { Container } from "react-bootstrap";
import getVideoId from "get-video-id";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    border: 1px solid white;
  }
  .text {
    color: #dbf1fb;
  }
`;
const MaterialView = (props) => {
  const id = props.youtubelink;
  return (
    <Styles>
      <ScrollAnimation animateIn="animate__lightSpeedInRight">
        <Container className="main-bg text">
          <div>{props.title}</div>
          <div>{props.about}</div>
          <div>
            <YouTube videoId={getVideoId({ id })} opts={youtubeOptions} />
          </div>
        </Container>
      </ScrollAnimation>
    </Styles>
  );
};
