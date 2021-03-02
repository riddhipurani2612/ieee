import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";

const Styles = styled.div`
.main-bg {
    background: #2e151b;
  }
  .text {
    color: white;
  }
  .center{
    paddingBottom: "56.25%";
    width: "100%";
    height: "100%
  }
`;

const Newsletter = () => {
  const youtubeOptions = {
    width: "95%",
  };
  return (
    <Styles>
      <Container>
        <div className="main-bg text">
          <div className="display-3 text-center">News Letters</div>
          <Row>
            <Col>
              <div className="display-4 my-5 text-center">
                Need of a GRSS Chapter Newsletter
              </div>
            </Col>
            <Col>
              <YouTube videoId="OI4nz-Gvlj4" opts={youtubeOptions} />
            </Col>
          </Row>
          <div>
            <div>
              <a
                href="https://drive.google.com/file/d/10ROQXM2vxjaKi1lyykOLOZ0i4Mh2OR8O/view?usp=sharing"
                target="blank"
              >
                Download IEEE Gujarat Section Geoscience and Remote Sensing
                Society- Chapter Newsletter-Volume7|Issue 1| December 2019
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1fHdqMWuJ26PubOiNNEUvEX4sAwUb7YS3/view?usp=sharing"
                target="blank"
              >
                Download IEEE Gujarat Section Geoscience and Remote Sensing Society-
          Chapter Newsletter-Volume6|Issue 1| December 2018
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1zC8Sc20mo2jDnck1iA7kvuLZJ6ohulQG/view?usp=sharing"
                target="blank"
              >
               Download IEEE Gujarat Section Geoscience and Remote Sensing Society-
          Chapter Newsletter-Volume5|Issue 1| December 2017
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1J8ikWTbP8LI5_mUTOTN3vELUfll7nUGP/view?usp=sharing"
                target="blank"
              >
                Download IEEE Gujarat Section Geoscience and Remote Sensing Society-
          Chapter Newsletter-Volume4|Issue 1| December 2016
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1ubrrAajZt59vMf5T4Gg4bsUcWQ0wPL1p/view?usp=sharing"
                target="blank"
              >
                Download IEEE Gujarat Section Geoscience and Remote Sensing Society-
          Chapter Newsletter-Volume3|Issue 1| December 2015
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1ThYD-Fo_xmOB8CXSogpY0SYQUdcnkw3R/view?usp=sharing"
                target="blank"
              >
                Download IEEE Gujarat Section Geoscience and Remote Sensing Society-
          Chapter Newsletter-Volume2|Issue 1| December 2014
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/19zp-eK2eF38XFLahJ9WdLcmNrKW4FFhF/view?usp=sharing"
                target="blank"
              >
                Download IEEE Gujarat Section Geoscience and Remote Sensing Society-
          Chapter Newsletter-Volume1|Issue 1| December 2013
              </a>
            </div>
        </div>
        </div>
      </Container>
    </Styles>
  );
};

export default Newsletter;