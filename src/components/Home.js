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
import "./main.css";
const Styles = styled.div``;
const Home = (props) => {
  const [eventValues, setEventValues] = useState(false);
  const youtubeOptions = {
    width: "100%",
    height: "400rem",
  };
  const [events, setEvents] = useState([]);
  const { eventname, date, time, about, hostedby } = events;
  const dateFormate = (date) =>{
    var temp =date.split('T') 
    return temp[0];
  };
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
      if (response.data.length) {
        setEvents(response.data);
        setEventValues(true);
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const link = (links) =>{
    if(links===undefined){
      return "undefined"
    }
    else{
      return links
    }
  }
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
            style={{ position: "fixed", backgroundColor: "#084C61" }}
            variant="outline-light"
            onClick={() => setFeedbackModal(true)}
            title="Feedback"
          >
            <i class="fa fa-comments-o" aria-hidden="true"></i>
          </Button>

          <Container>
            <ScrollAnimation
              animateIn="animate__backInDown"
              animateOut="animate__backOutUp"
            >
              <div className="home-intro">
                <br></br>Welcome To IEEE<br></br>
                Gujarat Section<br></br> GRSS Chapter<br></br>
                <br></br>Scroll to explore more
                <br></br>
                <Link to="who" spy={true} smooth={true}>
                  <div className="heading">
                    <i className="fa fa-chevron-down my-5"></i>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          </Container>
          <div id="who">
            <Container>
              <ScrollAnimation
                animateIn="animate__pulse"
                animateOut="animate__fadeOut"
              >
                <div className="home-intro2">Who are we?</div>
              </ScrollAnimation>
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
                      <div
                        className="home-intro2"
                      >
                        Upcoming Events
                      </div>
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
                  <div>
                    <div className="home-intro2">Important Links</div>
                    <br></br>
                    <Row>
                      <Col
                        xs={{ span: 3, order: 1 }}
                        md={{ span: 3, order: 1 }}
                      >
                        <a
                          href="https://www.grss-ieee.org/"
                          target="blank"
                          className="links"
                        >
                          IEEE - GRSS
                        </a>
                      </Col>
                      <Col
                        xs={{ span: 3, order: 2 }}
                        md={{ span: 3, order: 2 }}
                      >
                        <a
                          href="https://www.grss-ieee.org/about/membership/benefits-of-membership/"
                          target="blank"
                          className="links"
                        >
                          Why Join Us?
                        </a>
                      </Col>
                      <Col
                        xs={{ span: 3, order: 3 }}
                        md={{ span: 3, order: 3 }}
                      >
                        <a
                          href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                          target="blank"
                          className="links"
                        >
                          IEEE-Xplore Digital Library
                        </a>
                      </Col>
                      <Col
                        xs={{ span: 3, order: 4 }}
                        md={{ span: 3, order: 4 }}
                      >
                        <a
                          href="https://standards.ieee.org/"
                          target="blank"
                          className="links"
                        >
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
      </div>
    </Styles>
  );
};
export default Home;
