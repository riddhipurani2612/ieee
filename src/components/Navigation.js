import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
import styled from "styled-components";
import axios from "axios";
const Styles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Merriweather:900&display=swap");

  :root {
    --color-primary: #002626;
    --color-secondary: #f0f7ee;
    --duration: 1s;
    --nav-duration: calc(var(--duration) / 4);
    --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
    --space: 1rem;
    --font-primary: "Helvetica", sans-serif;
    --font-heading: "Merriweather", serif;
    --font-size: 1.125rem;
    --line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }

  h1 {
    margin-bottom: calc(var(--space) * 3);
    font-family: var(--font-heading);
    font-size: calc(var(--font-size) + 6vmin);
    line-height: calc(var(--line-height) / 1.25);
  }

  .main-navigation-toggle {
    position: fixed;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;

    + label {
      position: fixed;
      top: calc(var(--space) * 1.5);
      right: calc(var(--space) * 2);
      cursor: pointer;
      z-index: 2;
    }
  }

  .icon--menu-toggle {
    --size: calc(1rem + 4vmin);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    stroke-width: 6;
  }

  .icon-group {
    transform: translateX(0);
    transition: transform var(--nav-duration) var(--ease);
  }

  .icon--menu {
    stroke: var(--color-primary);
  }

  .icon--close {
    stroke: var(--color-secondary);
    transform: translateX(-100%);
  }

  .main-navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform var(--nav-duration);
    z-index: 1;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-primary);
      transform-origin: 0 50%;
      z-index: -1;
    }

    ul {
      font-size: 12vmin;
      font-family: var(--font-heading);
      width: 100%;
    }

    li {
      --border-size: 1vmin;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: var(--border-size);
        background-color: var(--color-secondary);
        transform-origin: 0 50%;
        transform: translateX(-100%) skew(15deg);
      }
    }

    a {
      display: inline-block;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      color: var(--color-secondary);
      line-height: 1;
      text-decoration: none;
      user-select: none;
      padding: var(--space) calc(var(--space) * 2)
        calc(var(--space) + var(--border-size) / 2);
      transform: translateY(100%);
    }
  }

  .main-content {
    margin: 6rem auto;
    max-width: 70ch;
    padding: 0 calc(var(--space) * 2);
    transform: translateX(0);
    transition: transform calc(var(--nav-duration) * 2) var(--ease);

    > * + * {
      margin-top: calc(var(--space) * var(--line-height));
    }
  }

  .main-navigation-toggle:checked {
    ~ label .icon--menu-toggle {
      .icon-group {
        transform: translateX(100%);
      }
    }

    ~ .main-content {
      transform: translateX(10%);
    }

    ~ .main-navigation {
      transition-duration: 0s;
      transform: translateX(0);

      &:after {
        animation: nav-bg var(--nav-duration) var(--ease) forwards;
      }

      li:after {
        animation: nav-line var(--duration) var(--ease) forwards;
      }

      a {
        animation: link-appear calc(var(--duration) * 1.5) var(--ease) forwards;
      }

      @for $i from 1 through 4 {
        li:nth-child(#{$i}) {
          &:after,
          a {
            animation-delay: calc((var(--duration) / 2) * #{$i} * 0.125);
          }
        }
      }
    }
  }

  @keyframes nav-bg {
    from {
      transform: translateX(-100%) skewX(-15deg);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes nav-line {
    0% {
      transform: scaleX(0);
      transform-origin: 0 50%;
    }
    35% {
      transform: scaleX(1.001);
      transform-origin: 0 50%;
    }
    65% {
      transform: scaleX(1.001);
      transform-origin: 100% 50%;
    }
    100% {
      transform: scaleX(0);
      transform-origin: 100% 50%;
    }
  }

  @keyframes link-appear {
    0%,
    25% {
      transform: translateY(100%);
    }
    50%,
    100% {
      transform: translateY(0);
    }
  }
`;
const Navigation = (props) => {
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role, profile } = user;
  let response;
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };
  useEffect(async () => {
    try {
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user/getrole`, config);
      console.log(response.data);
      setUser(response.data);
      if (role === "Student") {
        setStudent(true);
      } else if (role === "Admin") {
        setAdmin(true);
      } else if (
        response.data.role === "Founder Member" ||
        response.data.role === "Professional Member"
      ) {
        setMember(true);
      }
    } catch (error) {
      console.log(error);
    }
    if (localStorage.getItem("token") === null) {
      props.setLogin(false);
    } else {
      props.setLogin(true);
    }
  }, [props.isLoggedIn, role]);
  const [showAbout, setShowAbout] = useState(false);
  const showDropdownAbout = (e) => {
    setShowAbout(!showAbout);
  };
  const hideDropdownAbout = (e) => {
    setShowAbout(false);
  };
  const [showEvent, setShowEvent] = useState(false);
  const showDropdownEvent = (e) => {
    setShowEvent(!showEvent);
  };
  const hideDropdownEvent = (e) => {
    setShowEvent(false);
  };
  const [showMaterial, setShowMaterial] = useState(false);
  const showDropdownMaterial = (e) => {
    setShowMaterial(!showMaterial);
  };
  const hideDropdownMaterial = (e) => {
    setShowMaterial(false);
  };
  const [showProfile, setShowProfile] = useState(false);
  const showDropdownProfile = (e) => {
    setShowProfile(!showProfile);
  };
  const hideDropdownProfile = (e) => {
    setShowProfile(false);
  };
  const [showNewsletter, setShowNewsletter] = useState(false);
  const showDropdownNewsletter = (e) => {
    setShowNewsletter(!showNewsletter);
  };
  const hideDropdownNewsletter = (e) => {
    setShowNewsletter(false);
  };
  const [showLecture, setShowLecture] = useState(false);
  const showDropdownLecture = (e) => {
    setShowLecture(!showLecture);
  };
  const hideDropdownLecture = (e) => {
    setShowLecture(false);
  };
  const [showMeeting, setShowMeeting] = useState(false);
  const showDropdownMeeting = (e) => {
    setShowMeeting(!showMeeting);
  };
  const hideDropdownMeeting = (e) => {
    setShowMeeting(false);
  };
  return (
    <Styles>
      <div className="width">
        <Navbar
          bg="dark"
          variant="dark"
          collapseOnSelect
          expand="lg"
          sticky="top"
        >
          <Navbar.Brand>
            <img width="10%" height="10%" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                hidden={!admin}
                title="Meetings"
                id="material_dropdown"
                show={showMeeting}
                onMouseEnter={showDropdownMeeting}
                onMouseLeave={hideDropdownMeeting}
              >
                <NavDropdown.Item href="/viewmeeting">
                  Meetings
                </NavDropdown.Item>
                <NavDropdown.Item href="/addmeeting">
                  Add Meeting
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/viewmeeting" hidden={!member}>
                Meetings
              </Nav.Link>
              <Nav.Link href="/members">Members</Nav.Link>
              <NavDropdown
                bg="dark"
                variant="dark"
                hidden={!props.isLoggedIn}
                title="Material"
                id="material_dropdown"
                show={showMaterial}
                onMouseEnter={showDropdownMaterial}
                onMouseLeave={hideDropdownMaterial}
              >
                <NavDropdown.Item href="/publication">
                  Publications
                </NavDropdown.Item>
                <NavDropdown
                  title="Lectures"
                  show={showLecture}
                  onMouseEnter={showDropdownLecture}
                  onMouseLeave={hideDropdownLecture}
                >
                  <NavDropdown.Item href="/dlp">
                    Distiguished lecture Program
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/expertlecture">
                    Expert Lectures
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="/sar">SAR</NavDropdown.Item>
                <NavDropdown.Item href="https://16fbc7d9-21b8-46d1-a23a-6d57e5ebf2ea.filesusr.com/archives/f6c427_4a32ef40e06146ff8a9cffb3e9a270e4.rar?dn=TARANG_24Mar2014.rar">
                  Download Tarang Software
                </NavDropdown.Item>
                <NavDropdown.Item href="/addmaterial" hidden={!member}>
                  Material Upload
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                hidden={!admin}
                title="Event"
                show={showEvent}
                onMouseEnter={showDropdownEvent}
                onMouseLeave={hideDropdownEvent}
              >
                <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="/addevent" hidden={!admin}>
                  Add Event
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/events" hidden={admin}>
                Events
              </Nav.Link>
              <NavDropdown
                bg="dark"
                variant="dark"
                title="About"
                show={showAbout}
                onMouseEnter={showDropdownAbout}
                onMouseLeave={hideDropdownAbout}
              >
                <NavDropdown.Item href="/chairs-desk">
                  Chair's Address
                </NavDropdown.Item>
                <NavDropdown.Item href="/faq">FAQs</NavDropdown.Item>
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="News Letters"
                show={showNewsletter}
                onMouseEnter={showDropdownNewsletter}
                onMouseLeave={hideDropdownNewsletter}
                hidden={!admin}
              >
                <NavDropdown.Item href="/newsletter">
                  Newsletters
                </NavDropdown.Item>
                <NavDropdown.Item href="/addnewsletter">
                  Add Newsletters/Publications
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/newsletter" hidden={admin}>
                Newsletters
              </Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/login" hidden={props.isLoggedIn}>
                Login/SignUp
              </Nav.Link>
              <NavDropdown
                className=""
                hidden={!props.isLoggedIn}
                title={
                  links(profile) != "undefined" ? (
                    <div>
                      <img
                        src={links(profile)}
                        alt={profile}
                        style={{ "border-radius": "50%" }}
                        height="20rem"
                        width="20rem"
                      ></img>
                    </div>
                  ) : (
                    <i
                      class="fa fa-user-circle-o"
                      aria-hidden="true"
                      height="20rem"
                      width="20rem"
                    ></i>
                  )
                }
                show={showProfile}
                onMouseEnter={showDropdownProfile}
                onMouseLeave={hideDropdownProfile}
              >
                <NavDropdown.Header>
                  <b>Logged In as : </b>
                  <br></br>
                  {first_name} {last_name}
                  <br></br>({role})
                </NavDropdown.Header>
                <hr></hr>
                <NavDropdown.Item href="/profile" hidden={admin}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Styles>
  );
};
export default Navigation;
