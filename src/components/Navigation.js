import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/grss_logo_white.png";
const Styles = styled.div`
  .navbar {
    font-family: Century !important;
    font-size: 1.2rem;
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
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };
  useEffect(async () => {
    if (token != null && token != undefined) {
      try {
        response = await axios.get(
          `https://grssprojectserver.herokuapp.com/user/getrole`,
          config
        );
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
    }
    if (localStorage.getItem("token") === null) {
      props.setLogin(false);
    } else {
      props.setLogin(true);
    }
  }, [props.isLoggedIn]);
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
          variant="dark"
          bg="dark"
        >
          <ReactBootStrap.Navbar.Brand>
            <img src={logo} width="40rem" height="40rem" alt="logo" />
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/chairs-desk">
                Chair's Address
              </ReactBootStrap.Nav.Link>

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
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Lectures
                  </a>
                  <ul className="dropdown-menu">
                    <a className="dropdown-item" href="/dlp">
                      Distiguished<br></br>Lectures
                    </a>
                    <a className="dropdown-item" href="/expertlecture">
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
              <ReactBootStrap.Nav.Link href="/events">
                Events
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="/contact">
                Contact
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/IEEE_GRSS"
                  target="blank"
                >
                  <i className="fa fa-twitter" style={{ color: "#afbbd0" }}></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" target="blank">
                  <i
                    className="fa fa-linkedin"
                    style={{ color: "#afbbd0" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/groups/546023775454229/"
                  target="blank"
                >
                  <i
                    className="fa fa-facebook"
                    style={{ color: "#afbbd0" }}
                  ></i>
                </a>
              </li>
              <ReactBootStrap.Nav.Link
                eventKey={2}
                href="/login"
                hidden={props.isLoggedIn}
              >
                Login
              </ReactBootStrap.Nav.Link>
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
                <ReactBootStrap.NavDropdown.Item
                  href="/changepassword"
                  hidden={admin}
                >
                  Change Password
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
