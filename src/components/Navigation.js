import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
import styled from "styled-components";
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
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      props.setLogin(false);
    }
    else{
      props.setLogin(true);
    }
  }, []);
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
  const profile = <i class="fa fa-user" aria-hidden="true"></i>;
  return (
    <Styles>
      <div className="width">
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand>
            <img width="10%" height="10%" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/meetings">Meetings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/members">Members</Nav.Link>
              </Nav.Item>
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
                <NavDropdown.Item href="/lecture">Lectures</NavDropdown.Item>
                <NavDropdown.Item href="/sar">SAR</NavDropdown.Item>
                <NavDropdown.Item href="https://16fbc7d9-21b8-46d1-a23a-6d57e5ebf2ea.filesusr.com/archives/f6c427_4a32ef40e06146ff8a9cffb3e9a270e4.rar?dn=TARANG_24Mar2014.rar">
                  Download Tarang Software
                </NavDropdown.Item>
                <NavDropdown.Item href="/addmaterial">
                  Material Upload
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Event"
                show={showEvent}
                onMouseEnter={showDropdownEvent}
                onMouseLeave={hideDropdownEvent}
              >
                <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="/addevent">Add Event</NavDropdown.Item>
              </NavDropdown>
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
              >
                <NavDropdown.Item href="/newsletter">
                  Newsletters
                </NavDropdown.Item>
                <NavDropdown.Item href="/addnewsletter">
                  Add Newsletters
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/login" hidden={props.isLoggedIn}>
                  Login/SignUp
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                hidden={!props.isLoggedIn}
                title={profile}
                id="dropdown-menu-align-responsive-1"
                show={showProfile}
                onMouseEnter={showDropdownProfile}
                onMouseLeave={hideDropdownProfile}
              >
                <NavDropdown.Header>
                  Logged In as : <br></br>
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
