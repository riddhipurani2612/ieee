import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import shivmohan from "../assets/shivmohan.jpg";
import suchit from "../assets/suchit.jpeg";

const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -23px;
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
const ContactUs = () => {
  return (
    <Styles>
      <div className="main-bg text py-5">
        <Container>
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Contact Us
          </div>

          <Row className="py-3">
            <Col>
              <div className="display-5 text-justify col-md-12 my-5">
                <div class="wrap">
                  <img
                    src={shivmohan}
                    style={{ marginRight: "2rem", marginBottom: "2rem" }}
                    height="250rem"
                    width="200rem"
                  />
                </div>
                <p className="wrap custom-text ">
                  Dr. Shiv Mohan<br></br>
                  Visiting Scientist <br></br>
                  PLANEX, Physical Research Laboratory <br></br>
                  Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
                  Former Scientist, Space Applications Centre (ISRO), Ahmedabad{" "}
                  <br></br>
                  Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                  Email: shivmohan.isro@gmail.com <br></br>
                </p>
              </div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="py-3">
            <Col>
              <div className="display-5 text-justify col-md-12 my-5">
                <div class="wrap">
                  <img
                    src={suchit}
                    style={{ marginRight: "2rem", marginBottom: "2rem" }}
                    height="250rem"
                    width="200rem"
                  />
                </div>
                <p className="wrap custom-text ">
                  Dr. Suchit Purohit<br></br>
                  Lecturer<br></br>
                  Department of Computer Science<br></br>
                  Gujarat University,<br></br>
                  Navrangpura<br></br>
                  Ahmedabad -380009 (Gujarat)<br></br>
                  Ph: +91-79-26300877;<br></br>
                  Mobile:+919913419959<br></br>
                  Email: suchitpurohit@yahoo.com<br></br>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
};

export default ContactUs;
