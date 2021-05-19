import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
import styled from "styled-components";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Styles = styled.div`
  .navbar-custom {
    background-color: #5f76a0;
  }
  /* change the brand and text color */
  .navbar-custom .navbar-brand,
  .navbar-custom .navbar-text {
    color: white;
    font-weight: bold;
  }
  /* change the link color */
  .navbar-custom .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
  }
  /* change the color of active or hovered links */
  .navbar-custom .nav-item.active .nav-link,
  .navbar-custom .nav-item.hover.nav-link {
    color: #cda95b;
  }
  .navbar-custom .nav-item.active .nav-link.active {
    color: #cda95b;
  }
  .dropdown-menu {
    position: 1rem;
  }
  .dropdown-submenu {
    position: relative;
  }
  .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 3px;
    top: 40%;
  }
  .dropdown-submenu:hover .dropdown-menu,
  .dropdown-submenu:focus .dropdown-menu {
    display: flex;
    flex-direction: column;
    position: absolute !important;
    margin-top: -30px;
    left: 100%;
  }
  @media (max-width: 992px) {
    .dropdown-menu {
      width: 63%;
    }
    .dropdown-menu .dropdown-submenu {
      width: auto;
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
      return "http://localhost:5000/" + temp;
    }
  };
  useEffect(async () => {
    try {
      response = await axios.get(`http://localhost:5000/user/getrole`, config);
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
  const welcome = "Welcome, " + first_name;
  const [click, setClick] = useState(false);
  const handleCilck = () => setClick(!click);
  return (
    <Styles>
      <div className="App">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          className="nava navbar-custom"
          sticky="top"
        >
          <ReactBootStrap.Navbar.Brand href="#home">
            IEEE GRSS Gujarat Section
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/">
                <ReactBootStrap.Nav.Link
                  href="/"
                  activeStyle={{ color: "#CDA95B" }}
                >
                  Home
                </ReactBootStrap.Nav.Link>
              </Link>
              <ReactBootStrap.NavDropdown
                title="About"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item
                  activeStyle={{ color: "#CDA95B" }}
                  href="/chairs-desk"
                >
                  Chair's Address
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/faq">
                  FAQs
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/about">
                  About Us
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>

              <ReactBootStrap.NavDropdown
                title="Members"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="/foundermembers">
                  Founder Members
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/professionalmembers">
                  Professional Members
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/studentmembers">
                  Student Members
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>

              <ReactBootStrap.NavDropdown
                title="Materials"
                id="collasible-nav-dropdown"
              >
                <li class="dropdown-submenu">
                  <a
                    class="dropdown-item dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Lectures
                  </a>
                  <ul class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Distiguished<br></br>Lectures
                    </a>
                    <a class="dropdown-item" href="#">
                      Expert <br></br>Lectures
                    </a>
                  </ul>
                </li>
                <ReactBootStrap.NavDropdown.Item href="/publication">
                  Publication
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/sar">
                  SAR
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/newsletter">
                  Newsletters
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="https://16fbc7d9-21b8-46d1-a23a-6d57e5ebf2ea.filesusr.com/archives/f6c427_4a32ef40e06146ff8a9cffb3e9a270e4.rar?dn=TARANG_24Mar2014.rar">
                  Download Tarang Software
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item
                  href="/addmaterail"
                  hidden={!student}
                >
                  Upload Lectures
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item
                  href="/addnewsletter"
                  hidden={!student}
                >
                  Upload Newsletter / Publication
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <Link to="/events">
                <ReactBootStrap.Nav.Link hidden={admin} href="/events">
                  Events
                </ReactBootStrap.Nav.Link>
              </Link>
              <ReactBootStrap.NavDropdown
                title="Events"
                id="collasible-nav-dropdown"
                hidden={!admin}
              >
                <ReactBootStrap.NavDropdown.Item href="/events">
                  Events
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="/addevent">
                  Add Event
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown
                title="Meetings"
                id="collasible-nav-dropdown"
                hidden={!admin}
              >
                <ReactBootStrap.NavDropdown.Item href="/viewmeeting">
                  View Meetings
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="/addmeeting">
                  Add Meeting
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <Link to="/viewmeeting">
                <ReactBootStrap.Nav.Link hidden={!member} href="/viewmeeting">
                  Meetings
                </ReactBootStrap.Nav.Link>
              </Link>

              <Link to="/contact">
                <ReactBootStrap.Nav.Link href="/contact">
                  Contact
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://twitter.com/IEEE_GRSS"
                  target="blank"
                >
                  <i className="fa fa-twitter" style={{ color: "#afbbd0" }}></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" target="blank">
                  <i
                    className="fa fa-linkedin"
                    style={{ color: "#afbbd0" }}
                  ></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.facebook.com/groups/546023775454229/"
                  target="blank"
                >
                  <i
                    className="fa fa-facebook"
                    style={{ color: "#afbbd0" }}
                  ></i>
                </a>
              </li>
              <Link to="/login">
                <ReactBootStrap.Nav.Link
                  eventKey={2}
                  href="/login"
                  hidden={props.isLoggedIn}
                >
                  Login
                </ReactBootStrap.Nav.Link>
              </Link>
              <ReactBootStrap.NavDropdown
                title={welcome}
                id="collasible-nav-dropdown"
                hidden={!props.isLoggedIn}
                drop="left"
              >
                <ReactBootStrap.NavDropdown.Item href="/profile" hidden={admin}>
                  Profile
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item
                  href="/dashboard"
                  hidden={!admin}
                >
                  Dashboard
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="/logout">
                  Log Out
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    </Styles>
  );
};
export default Navigation;
