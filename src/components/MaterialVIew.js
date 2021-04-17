import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    border: 1px solid white;
  }
  .text {
    color: #dbf1fb;
  }
  .youtubeOptions {
    width: "100%";
    height: "400rem";
  }
`;
const MaterialView = (props) => {
  const history = useHistory();
  const youtubeOptions = {
    width: "100%",
    height: "400rem",
  };
  const viewdetails = () =>{
    localStorage.setItem("materialId",props._id);
    history.push("/detailedview");
  }
  return (
    <Styles>
        <Container className="main-bg text my-5">
          {props.title}
          <Button onClick={viewdetails}>View &gt;&gt;</Button>
          <hr color="grey"></hr>
        </Container>
    </Styles>
  );
};
export default MaterialView;
