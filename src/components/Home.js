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
  a:link,
  a:visited {
    font-size: 1.5rem;
    font-weight: 1000%;
    font-family: Copperplate;
    background-color: inherit;
    color: white;
    border: 2px solid inherit;
    margin-left: 3rem;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    background-color: inherit;
    color: #ecc30b;
    font-size: 150%;
  }
`;
const Home = (props) => {
  const [eventValues,setEventValues] = useState(false);
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
      if(response.data.length){
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

      <div className="main-bg">
        <Container className="main-bg">
          <ScrollAnimation
            animateIn="animate__backInDown"
            animateOut="animate__backOutUp"
          >
            <h1 className="text-center heading" style={{ color: "#ECC30B" }}>
              <br></br>Welcome To IEEE<br></br>
              Gujarat Section<br></br> GRSS Chapter
            </h1>
            <h1 className="text-center text my-5" style={{ color: "#ECC30B" }}>
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
      </div>
      <div id="who" className="bg2" style={{ marginTop: "-48px" }}>
        <Container className="bg2">
          <br></br>
          <ScrollAnimation
            animateIn="animate__pulse"
            animateOut="animate__fadeOut"
          >
            <h2
              className="my-5 text-center text heading"
              style={{ color: "#CA054D", textDecoration: "underline" }}
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
                geoscience and remote sensing. The Geoscience and Remote Sensing
                Society seeks to advance science and technology in geoscience,
                remote sensing and related fields using conferences, education,
                and other resources.The fields of interest of the Society are
                the theory, concepts, and techniques of science and engineering
                as they apply to the remote sensing of the earth, oceans,
                atmosphere, and space, as well as the processing, interpretation
                and dissemination of this information. Gujarat,one of the most
                vibrant states of India,houses renowned research and academic
                institutes which are actively involved in the field of
                geoscience and remote sensing.This lead to the inception of
                Gujarat chapter of IEEE GRSS which brings together researchers
                and academicians under one umbrella where the ideas and vision
                can be dissipitated in the form of conferences, meetings,
                lectures, workshops and other activities.
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
            {eventValues && 
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
            >
              <div>
                <h1
                  className="text text-center"
                  style={{ color: "#CA054D", textDecoration: "underline" }}
                >
                  Upcoming Events
                </h1>
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
            </ScrollAnimation>}
          </div>
          <Container>
            <ScrollAnimation
              animateIn="animate__backInUp"
              animateOut="animate__backOutDown"
            >
              <div className="text">
                <br></br>
                <br></br>
                <br></br>
                <h1
                  className="vertical-center text"
                  style={{ color: "#CA054D", textDecoration: "underline" }}
                >
                  Important Links
                </h1>
                <br></br>
                <a href="https://www.grss-ieee.org/" className="">
                  IEEE - GRSS
                </a>
                <a
                  href="https://www.grss-ieee.org/about/membership/benefits-of-membership/"
                  target="blank"
                >
                  Why Join Us?
                </a>
                <a
                  href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                  target="blank"
                >
                  IEEE Xplore Digital Library
                </a>
                <a href="https://standards.ieee.org/" target="blank">
                  IEEE Standards
                </a>
                <br></br>
                <br></br>
              </div>
            </ScrollAnimation>
          </Container>
        </Container>
      </div>
    </Styles>
  );
};

export default Home;
