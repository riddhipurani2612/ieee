import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Carousel } from "react-bootstrap";
import styled from "styled-components";
import YouTube from "react-youtube";
import Feedback from "./Feedback";
import { Link } from "react-scroll";
import EventView from "./UpcomingEventView";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./main.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import grss from "../assets/grss_logo.png";
import ieee from "../assets/ieee.png";
const Styles = styled.div``;
const Home = (props) => {
  const [eventValues, setEventValues] = useState(false);
  const youtubeOptions = {
    width: "100%",
    height: "400rem",
  };
  const [events, setEvents] = useState([]);
  const { eventname, date, time, about, hostedby } = events;
  const dateFormate = (date) => {
    var temp = date.split("T");
    return temp[0];
  };
  useEffect(async () => {
    try {
      const response = await axios.post(
        "https://grssprojectserver.herokuapp.com/counter"
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

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

      if (
        response.data.length &&
        response.data &&
        response.statusText === "OK"
      ) {
        setEvents(response.data);
        setEventValues(true);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  const link = (links) => {
    if (links === undefined) {
      return "undefined";
    } else {
      return links;
    }
  };
  const linkImage = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };
  const [showFeedbackModal, setFeedbackModal] = useState(false);
  return (
    <Styles>
      <div className="main-bg">
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
            style={{ position: "fixed" }}
            variant="outline-dark"
            onClick={() => setFeedbackModal(true)}
            title="Feedback"
          >
            <i class="fa fa-comments-o" aria-hidden="true"></i>
          </Button>
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src={img5} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Fourth slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="Fifth slide" />
            </Carousel.Item>
          </Carousel>
          <br></br>
          <div className="home-intro">
            <Row>
              <Col>
                <img src={ieee} width="100px" />
              </Col>
              <Col>
                <img src={grss} width="100px" />
              </Col>
            </Row>
            Welcome To IEEE<br></br>
            Gujarat Section<br></br> GRSS Chapter<br></br>
          </div>
          <br></br>
          <br></br>
          <div id="who">
            <Container>
              <div className="home-intro2">Who are we?</div>
              <br></br>
              <br></br>
              <div className="content">
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
                    remote sensing of the earth, oceans, atmosphere, and space,
                    as well as the processing, interpretation and dissemination
                    of this information. Gujarat,one of the most vibrant states
                    of India,houses renowned research and academic institutes
                    which are actively involved in the field of geoscience and
                    remote sensing.This lead to the inception of Gujarat chapter
                    of IEEE GRSS which brings together researchers and
                    academicians under one umbrella where the ideas and vision
                    can be dissipitated in the form of conferences, meetings,
                    lectures, workshops and other activities.
                  </ScrollAnimation>
                </Container>
              </div>
              <br></br>
              <br></br>
              <div>
                <YouTube videoId="JZrCOuquSN0" opts={youtubeOptions} />
                <br></br>
                <br></br>
                {eventValues && (
                  <ScrollAnimation
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                  >
                    <div>
                      <div className="home-intro2">Upcoming Events</div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div>
                        {events.map((eventObj, index) => (
                          <EventView
                            name={eventObj.eventname}
                            date={dateFormate(eventObj.date)}
                            time={eventObj.time}
                            about={eventObj.about}
                            hostedby={eventObj.hostedby}
                            registrationlink={link(eventObj.registrationlink)}
                            eventimage={linkImage(eventObj.eventimage)}
                            _id={eventObj._id}
                          />
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                )}
              </div>
              <Container>
                <div>
                  <div className="home-intro2">Important Links</div>
                  <br></br>
                  <Row>
                    <Col>
                      <a
                        href="https://www.grss-ieee.org/"
                        target="blank"
                        className="links"
                      >
                        IEEE - GRSS
                      </a>
                    </Col>
                    <Col>
                      <a
                        href="https://www.grss-ieee.org/about/membership/benefits-of-membership/"
                        target="blank"
                        className="links"
                      >
                        Why Join Us?
                      </a>
                    </Col>
                    <Col>
                      <a
                        href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                        target="blank"
                        className="links"
                      >
                        IEEE-Xplore Digital Library
                      </a>
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                </div>
              </Container>
            </Container>
          </div>
        </ScrollAnimation>
      </div>
    </Styles>
  );
};
export default Home;
