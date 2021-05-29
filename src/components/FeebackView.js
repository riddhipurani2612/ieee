import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import "./main.css";
const Styles = styled.div``;

const FeedbackView = (props) => {
    useEffect(()=>{
        console.log(props)
    })
    return (
    <Styles className="my-5">
      
      <div className="content">From :  {props.name}</div>
      <br></br>
      <div style={{ color: "grey" }}>
        {props.email}<br></br>
        {props.contact}<br></br>
        {props.address}<br></br>
        {props.subject}<br></br>
        {props.message}<br></br>
      </div>
      <br></br>
      <hr></hr>
    </Styles>
  );
};
export default FeedbackView;