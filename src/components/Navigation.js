import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #a6d4de;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #020100;

    padding-left: 20px;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #020100;
  }
  .dropdown-menu {
    color: #12263a;
    background-color: #a6d4de;
    right: 0 !important;
    left: auto !important;
  }
  .dropdown-menu: hover {
    color: #eff5fa;
    background-color: #12263a;
  }
  .dropdown-header {
    color: #463f1a;
  }
  .width {
    width: 100%;
  }
`;
const Navigation = (props) => {
  const [showAbout, setShowAbout] = useState(false);
  const showDropdownAbout = (e) => {
    setShowAbout(!showAbout);
  };
  const hideDropdownAbout = (e) => {
    setShowAbout(false);
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
                <Nav.Link href="/addevent">Add Event</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown
                hidden={!props.isLoggedIn}
                title="Material"
                id="material_dropdown"
                show={showMaterial}
                onMouseEnter={showDropdownMaterial}
                onMouseLeave={hideDropdownMaterial}
              >
                <NavDropdown.Item href="/newsletters">
                  Newsletters
                </NavDropdown.Item>
                <NavDropdown.Item href="/publication">
                  Publications
                </NavDropdown.Item>
                <NavDropdown.Item href="/lecture">Lectures</NavDropdown.Item>
                <NavDropdown.Item href="/sar">SAR</NavDropdown.Item>
                <NavDropdown.Item href="https://16fbc7d9-21b8-46d1-a23a-6d57e5ebf2ea.filesusr.com/archives/f6c427_4a32ef40e06146ff8a9cffb3e9a270e4.rar?dn=TARANG_24Mar2014.rar">
                  Download Tarang Software
                </NavDropdown.Item>
                <NavDropdown.Item href="/uploadmaterial">
                  Material Upload
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/events">Events</Nav.Link>
              </Nav.Item>
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
                  {localStorage.getItem("loggedInUserName")}
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
