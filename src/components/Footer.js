import {React,useState} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FAQ from "./FAQ";

const Styles = styled.div`
    .icon {
        color: black;
    }
    .text {
        font-size: 70%;
    }
`;

const Footer = (props) => {
    return (
        <Styles>
            <footer>
                <Container>
                    <Row>
                        <Col xs={5} className="mt-4">
                            <div className="text">
                                A non-profit organization, IEEE is the world's
                                largest professional association for the
                                advancement of technology.<br></br>
                                <br></br> © Copyright 2013 IEEE GRSS Gujarat
                                Section – All rights reserved. Use of this Web
                                site signifies your agreement to the terms and
                                conditions.
                            </div>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">IEEE</span>
                            <a
                                href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMGRS029"
                                target="blank"
                            >
                                <div className="mt-3">Join / Renew</div>
                            </a>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">Company</span>
                            <div className="mt-3">
                                Contact<br></br>
                                About<br></br>
                                Blog<br></br>
                            </div>
                        </Col>
                        <Col className="my-3">
                            <span className="h5">Legal</span>
                            <div className="mt-3">
                                Terms and Conditions<br></br>
                                Privacy policy<br></br>
                            </div>
                            <div class="main_container" id="id_main_container">
                                <div class="container_inner" id="display_div_id">
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Styles>
    );
};

export default Footer;
