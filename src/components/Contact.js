import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import styled from "styled-components";
import shivmohan from "../assets/shivmohan.jpg";
import suchit from "../assets/suchit.jpeg";

const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text {
    color: white;
  }
`;
const ContactUs = () => {
  return (
    <Styles>
      <div className="main-bg text py-5">
      <Container>
      <div className="display-3 text-left py-5">Contact Us</div>

              <Row className="py-3">
                <Col>
                  Dr. Shiv Mohan<br></br>
                  Visiting Scientist <br></br>
                  PLANEX, Physical Research Laboratory <br></br>
                  Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
                  Former Scientist, Space Applications Centre (ISRO), Ahmedabad{" "}
                  <br></br>
                  Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                  Email: shivmohan.isro@gmail.com <br></br>
                </Col>
                <Col>
                  <img src={shivmohan} height="150px" width="150px" />
                </Col>
               
              </Row>  
              <br></br><br></br>
              <Row className="py-3">
                <Col>
                  Dr. Suchit Purohit<br></br>
                  Lecturer<br></br>
                  Department of Computer Science<br></br>
                  Gujarat University,<br></br>
                  Navrangpura<br></br>
                  Ahmedabad -380009 (Gujarat)<br></br>
                  Ph: +91-79-26300877;<br></br>
                  Mobile:+919913419959<br></br>
                  Email: suchitpurohit@yahoo.com<br></br>
                </Col>
                <Col>
                  <img src={suchit} height="150px" width="150px" />
                </Col>
               
              </Row>
      </Container>
      </div>
    </Styles>
  );
};

export default ContactUs;
