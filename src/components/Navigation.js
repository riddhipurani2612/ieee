import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/grss_logo.png";
const Navigation = (props) => {
    return (
        <Navbar expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand>
                <img width="7%" height="7%" src={logo} />
                <span className="mx-3">IEEE Gujarat Section GRSS Chapter</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/chairs_desk">Chair's Desk</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Members" id="members_dropdown">
                        <NavDropdown.Item href="/founderMembers">Founder Members</NavDropdown.Item>
                        <NavDropdown.Item href="/professionalMembers">Professional Members</NavDropdown.Item>
                        <NavDropdown.Item href="/studentMembers">Student Members</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Material" id="material_dropdown">
                        <NavDropdown.Item href="/newsletters">Newsletters</NavDropdown.Item>
                        <NavDropdown.Item href="/publication">Publications</NavDropdown.Item>
                        <NavDropdown.Item href="/lecture">Lectures</NavDropdown.Item>
                        <NavDropdown.Item href="/sar">SAR</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.ieee-grss-gujaratsection.org/tarangsoftware">Download Tarang Software</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href="/events">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">Login/SignUp</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
