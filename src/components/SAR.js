import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
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

const SAR = () => {
  const youtubeOptions = {
    width: "95%",
  };
  return (
    <Styles>
      <Container>
        <div className="main-bg text">
          <div className="display-3 text-center">Lectures</div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Advanced Image Processing -SAR DataAnalytics- Dr Shiv Mohan,
                  Founder Chair, IEEE Geoscience.
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="main-bg text">
                  <YouTube videoId="jBjFWQCuOeU" opts={youtubeOptions} />
                  Dr Shiv Mohan, Founder Chair, IEEE Geoscience and RS Society
                  took a session explaining about Basics of SAR imagery, Data
                  Analysis and its techniques with SAR, Model based analysis and
                  some of the applications of SAR data in Crop analysis, Flood
                  damage assessment, forest biomass.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  SAR data
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="main-bg text">
                  To download the SAR data using the following link
                  <a
                    href="https://scihub.copernicus.eu/classic/"
                    target="blank"
                  >
                    Sentinel-1
                  </a>
                  <br></br>
                  <a
                    href="http://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/"
                    target="blank"
                  >
                    ALOS FnF global mosaic
                  </a>
                  <br></br>​
                  <a href="https://vertex.daac.asf.alaska.edu/" target="blank">
                    NASA DAAC
                  </a>
                  <br></br>​
                  <a
                    href="https://uavsar.jpl.nasa.gov/cgi-bin/data.pl"
                    target="blank"
                  >
                    NASA-JPL UAVSAR Data
                  </a>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  SAR Tools
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="main-bg text">
                  To download the SAR Tools using the following link <br></br>
                  <a
                    href="https://step.esa.int/main/toolboxes/polsarpro-v6-0-biomass-edition-toolbox/"
                    target="blank"
                  >
                    PolSARpro
                  </a>
                  <br></br>
                  <a
                    href="http://step.esa.int/main/download/snap-download/"
                    target="blank"
                  >
                    SNAP
                  </a>
                  <br></br>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  SAR Polarimetry Training- Dr. Carlos and Dr. Kostas
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="main-bg text">
                  Training materials on SAR Polarimetry, provided by Dr.
                  Konstantinos P. Papathanassiou and Dr. Carlos López-Martínez
                  during their visit to Ahmedabad in Dec 2019.
                  <a href="https://drive.google.com/file/d/1ClNpPnZJJa0JvLX9X4-MN-uKzABxv-Gm/view?usp=sharing">
                    SAR Interferometry Introduction{" "}
                  </a>
                  <a href="https://drive.google.com/file/d/1resRVeKhP5MIjoLkdHEEDOcUel9IozJ9/view?usp=sharing">
                    Synthetic Aperture Radar Principles{" "}
                  </a>
                  <a href="https://drive.google.com/file/d/1BJVjOZZXtNceAwDuuf1R5wcRGjSFq_Al/view?usp=sharing">
                    Theory of SAR Polarimetry
                  </a>
                  <a href="https://drive.google.com/file/d/1r-t1U15-ckKUM9aSQPnl9usjSQID_Vfh/view?usp=sharing">
                    SAR and PolSAR Data Statistical Description
                  </a>
                  <a href="https://drive.google.com/file/d/13I1HZ_YuM_YisA-ehUjq74jhqzu1tPcS/view?usp=sharing">
                    Polarimetric Target Decomposition Theorems
                  </a>
                  <a href="https://drive.google.com/file/d/12u5abW2u8elRMQqvyG34YMrW_WJKjeaV/view?usp=sharing">
                    SAR Polarimetry Applications
                  </a>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </Styles>
  );
};

export default SAR;
