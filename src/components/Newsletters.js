import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import PDFViewer from "pdf-viewer-reactjs";
import newsletter2019 from "../assets/newsletter2019.pdf";
import newsletter2018 from "../assets/newsletter2018.pdf";
import newsletter2017 from "../assets/newsletter2017.pdf";
import newsletter2016 from "../assets/newsletter2016.pdf";
import newsletter2015 from "../assets/newsletter2015.pdf";
import newsletter2014 from "../assets/newsletter2014.pdf";
import newsletter2013 from "../assets/newsletter2013.pdf";


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

          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume7|Issue 1| December 2019
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2019 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume6|Issue 1| December 2018
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2018 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume5|Issue 1| December 2017
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2017 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume4|Issue 1| December 2016
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2016 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume3|Issue 1| December 2015
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2015 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume2|Issue 1| December 2014
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2014 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Download IEEE Gujarat Section Geoscience and Remote Sensing
                  Society- Chapter Newsletter-Volume1|Issue 1| December 2013
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="main-bg text">
                  <PDFViewer
                    document={{
                      url: { newsletter2013 },
                    }}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </Styles>
  );
};

export default Newsletter;
