import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
const Styles = styled.div``;

const SAR = () => {
  const youtubeOptions = {
    width: "95%",
  };
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="material-header">
              Advanced Image Processing -SAR DataAnalytics- Dr Shiv Mohan,
              Founder Chair, IEEE Geoscience.
            </div>
            <YouTube videoId="jBjFWQCuOeU" opts={youtubeOptions} />
            <br></br>
            Dr Shiv Mohan, Founder Chair, IEEE Geoscience and RS Society took a
            session explaining about Basics of SAR imagery, Data Analysis and
            its techniques with SAR, Model based analysis and some of the
            applications of SAR data in Crop analysis, Flood damage assessment,
            forest biomass. SAR data To download the SAR data using the
            following link
            <ul>
              <br></br>
              <li>
                <a href="https://scihub.copernicus.eu/classic/" target="blank">
                  Sentinel-1
                </a>
              </li>
              <li>
                <a
                  href="http://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/"
                  target="blank"
                >
                  ALOS FnF global mosaic
                </a>
              </li>
              <li>
                <a href="https://vertex.daac.asf.alaska.edu/" target="blank">
                  NASA DAAC
                </a>
              </li>
              <li>
                <a
                  href="https://uavsar.jpl.nasa.gov/cgi-bin/data.pl"
                  target="blank"
                >
                  NASA-JPL UAVSAR Data
                </a>
              </li>
            </ul>{" "}
            ​
            <h4>
              SAR Tools To download the SAR Tools using the following link
            </h4>
            <br></br>
            <ul>
              <li>
                <a
                  href="https://step.esa.int/main/toolboxes/polsarpro-v6-0-biomass-edition-toolbox/"
                  target="blank"
                >
                  PolSARpro
                </a>
              </li>
              <li>
                <a
                  href="http://step.esa.int/main/download/snap-download/"
                  target="blank"
                >
                  SNAP
                </a>
              </li>
              <br></br>
            </ul>
            SAR Polarimetry Training- Dr. Carlos and Dr. Kostas Training
            materials on SAR Polarimetry, provided by Dr. Konstantinos P.
            Papathanassiou and Dr. Carlos López-Martínez during their visit to
            Ahmedabad in Dec 2019.
            <br></br>
            <br></br>
            <ul>
              <li>
                <a href="https://drive.google.com/file/d/1ClNpPnZJJa0JvLX9X4-MN-uKzABxv-Gm/view?usp=sharing">
                  SAR Interferometry Introduction{" "}
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1resRVeKhP5MIjoLkdHEEDOcUel9IozJ9/view?usp=sharing">
                  Synthetic Aperture Radar Principles{" "}
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1BJVjOZZXtNceAwDuuf1R5wcRGjSFq_Al/view?usp=sharing">
                  Theory of SAR Polarimetry
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1r-t1U15-ckKUM9aSQPnl9usjSQID_Vfh/view?usp=sharing">
                  SAR and PolSAR Data Statistical Description
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/13I1HZ_YuM_YisA-ehUjq74jhqzu1tPcS/view?usp=sharing">
                  Polarimetric Target Decomposition Theorems
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/12u5abW2u8elRMQqvyG34YMrW_WJKjeaV/view?usp=sharing">
                  SAR Polarimetry Applications
                </a>
              </li>
            </ul>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};

export default SAR;
