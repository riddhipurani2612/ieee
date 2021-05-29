import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import shivmohan from "../assets/shivmohan.jpg";
import suchit from "../assets/suchit.jpeg";
import "./main.css";
const Styles = styled.div`
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
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="header-1"> Contact Us</div>
            <div className="my-5 member-content">
              <Row>
                <Col
                  xs={{ span: 6, order: 1 }}
                  md={{ span: 6, order: 2 }}
                  class="col-sm-4"
                >
                  <img
                    src={shivmohan}
                    style={{ marginRight: "2rem", marginBottom: "2rem" }}
                    height="250rem"
                    width="200rem"
                    class="center"
                  />
                </Col>
                <Col
                  xs={{ span: 12, order: 2 }}
                  md={{ span: 6, order: 1 }}
                  class="col-sm-8"
                >
                  <p className="wrap custom-text ">
                    Dr. Shiv Mohan<br></br>
                    Visiting Scientist <br></br>
                    PLANEX, Physical Research Laboratory <br></br>
                    Thaltej Campus, Ahmedabad – 380059 (Gujarat), India{" "}
                    <br></br>
                    Former Scientist, Space Applicatio0ns Centre (ISRO),
                    Ahmedabad <br></br>
                    Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                    Email: shivmohan.isro@gmail.com <br></br>
                  </p>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                  <img
                    src={suchit}
                    style={{ marginRight: "2rem", marginBottom: "2rem" }}
                    height="250rem"
                    width="200rem"
                  />
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
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
                </Col>
              </Row>
            </div>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};

export default ContactUs;
