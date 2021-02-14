import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/grss_logo.png";

const Navigation = (props) => {
    return (
        <Navbar expand="lg" bg="light" variant="light">
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
                        <Nav.Link href="/">Chair's Desk</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Members</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/">Login/SignUp</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
