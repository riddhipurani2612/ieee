import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import YouTube from "react-youtube";
import Feedback from "./Feedback";
import { Link } from "react-scroll";
import EventView from "./UpcomingEventView";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .bg2 {
    background-color: #022f40;
  }
  .text {
    color: white;
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
  a:link {
    color: white;
    font-size: 140%;
    line-height: 2rem;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: grey;
  }

  .grad1 {
    height: 100px;
    background-color: red; /* For browsers that do not support gradients */
    background-image: linear-gradient(0deg, red, yellow);
  }
`;
const Home = (props) => {
  const [eventValues, setEventValues] = useState(false);
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
        "https://grssprojectserver.herokuapp.com/event/upcoming",
        config
      );
      if (response.data.length) {
        setEvents(response.data);
        setEventValues(true);
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [showFeedbackModal, setFeedbackModal] = useState(false);
  return (
    <Styles>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <Feedback
          show={showFeedbackModal}
          closeModal={() => setFeedbackModal(false)}
          onHide={() => setFeedbackModal(false)}
        />
        <Button
          className="mt-5"
          style={{ position: "fixed", backgroundColor: "#084C61" }}
          variant="outline-light"
          onClick={() => setFeedbackModal(true)}
          title="Feedback"
        >
          <i class="fa fa-comments-o" aria-hidden="true"></i>
        </Button>

        <Container className="main-bg">
          <ScrollAnimation
            animateIn="animate__backInDown"
            animateOut="animate__backOutUp"
          >
            <h1 className="text-center heading" style={{ color: "white" }}>
              <br></br>Welcome To IEEE<br></br>
              Gujarat Section<br></br> GRSS Chapter
            </h1>
            <h1 className="text-center text my-5" style={{ color: "white" }}>
              Scroll to explore more
              <Link to="who" spy={true} smooth={true}>
                <div className="heading">
                  <i className="fa fa-chevron-down my-5"></i>
                </div>
              </Link>
              <br></br>
            </h1>
          </ScrollAnimation>
        </Container>
        <div id="who" style={{ marginTop: "-48px" }}>
          <Container className="bg2">
            <br></br>
            <ScrollAnimation
              animateIn="animate__pulse"
              animateOut="animate__fadeOut"
            >
              <h2
                className="my-5 text-center text heading"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Who are we?
              </h2>
            </ScrollAnimation>
            <div className="text custom-text">
              <Container>
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                >
                  The IEEE Geoscience and Remote Sensing Society (GRSS) is a
                  professional society of the IEEE, active in the fields of
                  geoscience and remote sensing. The Geoscience and Remote
                  Sensing Society seeks to advance science and technology in
                  geoscience, remote sensing and related fields using
                  conferences, education, and other resources.The fields of
                  interest of the Society are the theory, concepts, and
                  techniques of science and engineering as they apply to the
                  remote sensing of the earth, oceans, atmosphere, and space, as
                  well as the processing, interpretation and dissemination of
                  this information. Gujarat,one of the most vibrant states of
                  India,houses renowned research and academic institutes which
                  are actively involved in the field of geoscience and remote
                  sensing.This lead to the inception of Gujarat chapter of IEEE
                  GRSS which brings together researchers and academicians under
                  one umbrella where the ideas and vision can be dissipitated in
                  the form of conferences, meetings, lectures, workshops and
                  other activities.
                </ScrollAnimation>
              </Container>
            </div>
            <br></br>
            <br></br>
            <div className="bg2">
              <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
              >
                <YouTube videoId="JZrCOuquSN0" opts={youtubeOptions} />
              </ScrollAnimation>
              <br></br>
              <br></br>
              {eventValues && (
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                >
                  <div>
                    <div
                      className="display-3 text-center"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      {" "}
                      Upcoming Events
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                      {events.map((eventObj, index) => (
                        <EventView
                          name={eventObj.eventname}
                          date={eventObj.date}
                          time={eventObj.time}
                          about={eventObj.about}
                          hostedby={eventObj.hostedby}
                          registrationlink={eventObj.registrationlink}
                        />
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </div>
            <Container>
              <ScrollAnimation
                animateIn="animate__backInUp"
                animateOut="animate__backOutDown"
              >
                <div className="text">
                  <h2
                    className="vertical-center text"
                    style={{ color: "#CA054D", textDecoration: "underline" }}
                  >
                    Important Links
                  </h2>
                  <br></br>
                  <Row>
                    <Col>
                      <a href="https://www.grss-ieee.org/" className="">
                        IEEE - GRSS
                      </a>
                    </Col>
                    <Col>
                      <a
                        href="https://www.grss-ieee.org/about/membership/benefits-of-membership/"
                        target="blank"
                      >
                        Why Join Us?
                      </a>
                    </Col>
                    <Col>
                      <a
                        href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                        target="blank"
                      >
                        IEEE Xplore Digital Library
                      </a>
                    </Col>
                    <Col>
                      <a href="https://standards.ieee.org/" target="blank">
                        IEEE Standards
                      </a>
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                </div>
              </ScrollAnimation>
            </Container>
          </Container>
        </div>
      </ScrollAnimation>
    </Styles>
  );
};
export default Home;
