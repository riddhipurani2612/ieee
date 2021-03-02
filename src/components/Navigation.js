import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
import profile from "../assets/female_profile.jpg";
const Navigation = (props) => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <img width="7%" height="7%" src={logo} />
        <span className="mx-1">IEEE Gujarat Section GRSS Chapter</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <NavDropdown
            hidden={!props.isLoggedIn}
            title="Material"
            id="material_dropdown"
          >
            <NavDropdown.Item href="/newsletters">Newsletters</NavDropdown.Item>
            <NavDropdown.Item href="/publication">
              Publications
            </NavDropdown.Item>
            <NavDropdown.Item href="/lecture">Lectures</NavDropdown.Item>
            <NavDropdown.Item href="/sar">SAR</NavDropdown.Item>
            <NavDropdown.Item href="https://16fbc7d9-21b8-46d1-a23a-6d57e5ebf2ea.filesusr.com/archives/f6c427_4a32ef40e06146ff8a9cffb3e9a270e4.rar?dn=TARANG_24Mar2014.rar">
              Download Tarang Software
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav.Item>
          <NavDropdown title="About">
            <NavDropdown.Item href="/chairs-desk">
              Chair's Address
            </NavDropdown.Item>
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
          <Nav.Item>
            <Nav.Link
              href="/profile"
              hidden={!props.isLoggedIn}
              title="Profile"
            >
              <Image
                src={profile}
                roundedCircle
                height="20px"
                weight="20px"
              ></Image>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
