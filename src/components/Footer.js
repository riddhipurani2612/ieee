import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FAQ from "./FAQ";

const Styles = styled.div`
  .icon {
    color: black;
  }
  .text {
    font-size: 0.8rem;
    color: white;
    line-height : 1rem;
  }
  .bottom {
    margin-bottom: 0px;
  }
`;

const Footer = (props) => {
  return (
    <Styles>
      <footer style={{ backgroundColor: "black" , margin:"auto"}}>
        <Row>
          <Col xs={5} className="mt-4">
            <div className="text" style={{ marginLeft: "3rem" }}>
              A non-profit organization, IEEE is the world's largest
              professional association for the advancement of technology.
              <br></br> © Copyright 2021 IEEE GRSS Gujarat Section – All rights
              reserved. Use of this Web site signifies your agreement to the
              terms and conditions.
              <br></br>Support : Developed anf maintained by Department of
              Computer Science Gujarat University
            </div>
          </Col>
          <Col xs={2} className="my-3">
            <span className="h5">IEEE</span>
            <a
              href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMGRS029"
              target="blank"
            >
              <div className="mt-3">Join / Renew</div>
            </a>
          </Col>
          <Col xs={2} className="my-3">
            <div className="mt-3 h3">
              <a
                href="https://www.facebook.com/groups/546023775454229/"
                target="blank"
              >
                <i className="fa fa-twitter" style={{color : "white"}}></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <i className="fa fa-linkedin" style={{color : "white"}}></i>
              &nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/IEEE_GRSS" target="blank">
                <i className="fa fa-facebook" style={{color : "white"}}></i>
              </a>
            </div>
          </Col>
          <Col xs={2} className="my-3">
            <span className="h5">Legal</span>
            <div className="mt-3">
              <a
                href="https://www.grss-ieee.org/about/membership/benefits-of-membership/"
                target="blank"
              >
                Terms and Conditions
              </a>
              <br></br>
              <a
                href="https://www.ieee.org/security-privacy.html"
                target="blank"
              >
                Privacy policy
              </a>
              <br></br>
            </div>
            <div class="main_container" id="id_main_container">
              <div class="container_inner" id="display_div_id"></div>
            </div>
          </Col>
        </Row>
      </footer>
    </Styles>
  );
};

export default Footer;
