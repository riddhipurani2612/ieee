import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import YouTube from "react-youtube";
import Feedback from "./Feedback";
import { Link } from "react-scroll";
import StudentMembers from "StudentMember";
import axios from "axios";
import satellite from "../assets/setallite.jpg";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .bg2 {
    background-color: #429eb3;
  }
  .text {
    color: #dbf1fb;
  }
  .heading {
    color: white;
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 1000%;
    font-family: Copperplate;
    transition: 0.2s;
  }
  .hovering {
    color: white;
    font-size: 3rem;
    line-height: 5rem;
    font-weight: 1000%;
    font-family: Copperplate;
    transition: 0.2s;
  }
  .hovering: hover {
    font-size: 4rem;
  }
  .custom-text {
    font-size: 140%;
    line-height: 2rem;
  }
  .twitter {
    transition: all 0.2s ease-in-out;
    :hover {
      color: #00acee;
      transform: scale(1.5);
    }
  }
  .facebook {
    transition: all 0.2s ease-in-out;
    :hover {
      color: #3b5998;
      transform: scale(1.5);
    }
  }
  .linkedin {
    transition: all 0.2s ease-in-out;
    :hover {
      color: #0e76a8;
      transform: scale(1.5);
    }
  }
  .vertical-center {
    display: flex;
    justify-content: center;
    height: 50px;
  }
  .button {
    border: 1px solid;
    color: white;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.4s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .button: hover {
    border: 2px solid white;
    color: blue;
    text-decoration: none;
  }
`;

const Home = (props) => {
  const youtubeOptions = {
    width: "100%",
    height: "400rem",
  };
  const [events, setEvents] = useState([]);
  const { eventname, date, time, about, hostedby } = events;
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      response = await axios.get(
        "http://localhost:5000/event/upcoming",
        config
      );
      setEvents(response.data);
      console.log(events);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [showFeedbackModal, setFeedbackModal] = useState(false);
  return (
    <Styles>
      <Feedback
        show={showFeedbackModal}
        closeModal={() => setFeedbackModal(false)}
        onHide={() => setFeedbackModal(false)}
      />
      <Button
        className="mt-5"
        style={{ position: "fixed" }}
        variant="outline-light"
        onClick={() => setFeedbackModal(true)}
        title="Feedback"
      >
        <i class="fa fa-comments-o" aria-hidden="true"></i>
      </Button>

      <Container className="main-bg">
        <Container>
          <br></br>
          <h1 className="text-center my-3 heading">
            <br></br>Welcome To IEEE<br></br>
            Gujarat Section<br></br> GRSS Chapter
          </h1>
          <h1 className="text-center text my-5">
            Scroll to explore more
            <Link to="who" spy={true} smooth={true}>
              <div className="heading">
                <i className="fa fa-chevron-down my-5"></i>
              </div>
            </Link>
          </h1>
        </Container>
      </Container>
      <div id="who" className="bg2" style={{ marginTop: "-48px" }}>
        <Container className="bg2">
          <br></br>
          <br></br>
          <h2 className="my-5 text-center text heading">Who are we?</h2>
          <div className="text-justify text custom-text">
            <Container>
              The IEEE Geoscience and Remote Sensing Society (GRSS) is a
              professional society of the IEEE, active in the fields of
              geoscience and remote sensing. The Geoscience and Remote Sensing
              Society seeks to advance science and technology in geoscience,
              remote sensing and related fields using conferences, education,
              and other resources.The fields of interest of the Society are the
              theory, concepts, and techniques of science and engineering as
              they apply to the remote sensing of the earth, oceans, atmosphere,
              and space, as well as the processing, interpretation and
              dissemination of this information. Gujarat,one of the most vibrant
              states of India,houses renowned research and academic institutes
              which are actively involved in the field of geoscience and remote
              sensing.This lead to the inception of Gujarat chapter of IEEE GRSS
              which brings together researchers and academicians under one
              umbrella where the ideas and vision can be dissipitated in the
              form of conferences, meetings,lectures,workshops and other
              activiies.
            </Container>
          </div>
          <br></br>
          <br></br>
          <div className="bg2">
            <YouTube videoId="JZrCOuquSN0" opts={youtubeOptions} />
            <br></br>
            <div>
              <h1 className="text text-center">Upcoming Events</h1>
              <div>
                <ol>
                  {
                    events.map((eventObj,index)=>{
                      <StudentMembers/>
                      console.log(eventObj.eventname);
                      console.log(eventObj.date);
                    })
                  }
                </ol>
              </div>
            </div>
            <Row className="my-5">
              <Col className="text-center">
                <a
                  href="https://www.facebook.com/groups/546023775454229/"
                  target="blank"
                >
                  <i className="fa fa-5x fa-facebook text facebook"></i>
                </a>
              </Col>
              <Col className="text-center">
                <i className="fa fa-5x fa-linkedin text linkedin"></i>
              </Col>
              <Col className="text-center">
                <a href="https://twitter.com/IEEE_GRSS" target="blank">
                  <i className="fa fa-5x fa-twitter text twitter"></i>
                </a>
              </Col>
            </Row>
          </div>
          <h1 className="vertical-center text">Important Links</h1>
          <br></br>
          <br></br>
          <div className="vertical-center">
            <a href="https://www.grss-ieee.org/" target="blank">
              <Button variant="outline-light button" size="lg">
                IEEE - GRSS
              </Button>
            </a>
          </div>
          <br></br>
          <div className="vertical-center">
            <a
              href="https://www.grss-ieee.org/about/membership/benefits-of-membership/"
              target="blank"
            >
              <Button variant="outline-light button" size="lg">
                Why Join Us?
              </Button>
            </a>
          </div>
          <br></br>
          <div className="vertical-center">
            <a
              href="https://ieeexplore.ieee.org/Xplore/home.jsp"
              target="blank"
            >
              <Button variant="outline-light button" size="lg">
                IEEE Xplore Digital Library
              </Button>
            </a>
          </div>
          <br></br>
          <div className="vertical-center">
            <a href="https://standards.ieee.org/" target="blank">
              <Button variant="outline-light button" size="lg">
                IEEE Standards
              </Button>
            </a>
          </div>
        </Container>
      </div>
    </Styles>
  );
};

export default Home;
