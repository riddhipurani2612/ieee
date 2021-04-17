import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
import styled from "styled-components";
import axios from "axios";
const Styles = styled.div`
  .navbar {
    background: white;
    justify-content: center;
    font-size: 1.2rem;
    position: sticky;
    justify-content: space-between;
  }
  .nav-link {
    color: white;
    align-items: center;
    padding: 0.5rem 1rem;
    font-weight: 1000%;
    font-family: Copperplate;
    height: 100%;
    &:hover {
      text-decoration: underline 3px red;
      font-weight: 10000%;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #020100;
  }
  .dropdown-menu {
    color: #12263a;
    background-color: white;
    right: 0 !important;
    left: auto !important;
  }
  .dropdown-header {
    color: #463f1a;
  }
`;
const Navigation = (props) => {
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);
  const [student, setStudent] = useState(false);
  const [user,setUser] = useState({});
  const {
    first_name,
    last_name,
    role
  } = user;
  let response;
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  useEffect(async () => {
    try {
      response = await axios.get(`http://localhost:5000/user/getrole`, config);
      console.log(response.data);
      setUser(response.data);
      if(role === "Student"){
        setStudent(true);
      }
      else if(role === "Admin"){
        setAdmin(true);
      }
      else{
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
  }, [props.isLoggedIn]);
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
  const profile = <i class="fa fa-user" aria-hidden="true"></i>;
  return (
    <Styles>
      <div className="width">
        <Navbar collapseOnSelect expand="lg" sticky="top">
          <Navbar.Brand>
            <img width="10%" height="10%" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/meetings" hidden={!admin}>Meetings</Nav.Link>
                <Nav.Link href="/members">Members</Nav.Link>
              <NavDropdown
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
                  onMouseLeave={hideDropdownLecture}>
                    <NavDropdown.Item href="/dlp">Distiguished lecture Program</NavDropdown.Item>
                    <NavDropdown.Item href="/expertlecture">Expert Lectures</NavDropdown.Item>    
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
                <NavDropdown.Item href="/addevent" hidden={!admin}>Add Event</NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href="/events" hidden={admin}>Events</Nav.Link>
              <NavDropdown
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
                <NavDropdown.Item href="/addnewsletter" >
                  Add Newsletters
                </NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href="/newsletter" hidden={admin}>Newsletters</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/login" hidden={props.isLoggedIn}>
                  Login/SignUp
                </Nav.Link>
              <NavDropdown
                hidden={!props.isLoggedIn}
                title={profile}
                id="dropdown-menu-align-responsive-1"
                show={showProfile}
                onMouseEnter={showDropdownProfile}
                onMouseLeave={hideDropdownProfile}
              >
                <NavDropdown.Header>
                  <b>Logged In as : </b><br></br>{first_name} {last_name}<br></br>({role})
                </NavDropdown.Header>
                <hr></hr>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
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