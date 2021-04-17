import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
}
.text {
  color : white;
  font-size: 140%;
  line-height: 2rem;
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
      <Container className="main-bg text">
          <div className="display-4 main-bg text-center">Advanced Image Processing -SAR DataAnalytics- Dr Shiv Mohan, Founder
          Chair, IEEE Geoscience.</div><br></br>
          <YouTube videoId="jBjFWQCuOeU" opts={youtubeOptions} />
          Dr Shiv Mohan, Founder Chair, IEEE Geoscience and RS Society took a
          session explaining about Basics of SAR imagery, Data Analysis and its
          techniques with SAR, Model based analysis and some of the applications
          of SAR data in Crop analysis, Flood damage assessment, forest biomass.
          SAR data To download the SAR data using the following link<br></br>
          <a href="https://scihub.copernicus.eu/classic/" target="blank">
            Sentinel-1
          </a>
          <br></br>
          <a href="http://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/" target="blank">
            ALOS FnF global mosaic
          </a>
          <br></br>​
          <a href="https://vertex.daac.asf.alaska.edu/" target="blank">
            NASA DAAC
          </a>
          <br></br>​
          <a href="https://uavsar.jpl.nasa.gov/cgi-bin/data.pl" target="blank">
            NASA-JPL UAVSAR Data
          </a><br></br><br></br>
          <h4>SAR Tools To download the SAR Tools using the following link</h4> <br></br>
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
          SAR Polarimetry Training- Dr. Carlos and Dr. Kostas Training materials
          on SAR Polarimetry, provided by Dr. Konstantinos P. Papathanassiou and
          Dr. Carlos López-Martínez during their visit to Ahmedabad in Dec 2019.<br></br><br></br>
          <a href="https://drive.google.com/file/d/1ClNpPnZJJa0JvLX9X4-MN-uKzABxv-Gm/view?usp=sharing">
            SAR Interferometry Introduction{" "}
          </a><br></br>
          <a href="https://drive.google.com/file/d/1resRVeKhP5MIjoLkdHEEDOcUel9IozJ9/view?usp=sharing">
            Synthetic Aperture Radar Principles{" "}
          </a><br></br>
          <a href="https://drive.google.com/file/d/1BJVjOZZXtNceAwDuuf1R5wcRGjSFq_Al/view?usp=sharing">
            Theory of SAR Polarimetry
          </a><br></br>
          <a href="https://drive.google.com/file/d/1r-t1U15-ckKUM9aSQPnl9usjSQID_Vfh/view?usp=sharing">
            SAR and PolSAR Data Statistical Description
          </a><br></br>
          <a href="https://drive.google.com/file/d/13I1HZ_YuM_YisA-ehUjq74jhqzu1tPcS/view?usp=sharing">
            Polarimetric Target Decomposition Theorems
          </a><br></br>
          <a href="https://drive.google.com/file/d/12u5abW2u8elRMQqvyG34YMrW_WJKjeaV/view?usp=sharing">
            SAR Polarimetry Applications
          </a><br></br>
      </Container>
    </Styles>
  );
};

export default SAR;
