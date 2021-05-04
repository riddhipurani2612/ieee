import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
    font-size: 140%;
    line-height: 2rem;
  }
  .wrap {
    overflow-wrap: break-word;
    spacing: 2rem;
  }
  .custom-text {
    font-size: 140%;
    line-height: 2rem;
  }
  .content {
    max-width: 500px;
    margin: auto;
    padding: 50px;
  }
`;
const AboutUs = () => {
  return (
    <Styles>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <Container className="main-bg text w3-panel w3-border w3-border-white">
          <div className="w3-panel w3-border w3-border-white">
            <div
              className="display-3 text-center"
              style={{ color: "white", textDecoration: "underline" }}
            >
              About Us
            </div>

            <div className="display-5 text-justify my-5 mx-5 wrap">
              Worldwide, IEEE membership is divided into geographic units called
              Sections. Chapters are technical subunits of a Region, one or more
              Sections, or a Geographic Council, and is constituted by a minimum
              of twelve (12) members of a Society, or group of Societies and
              established by petition to the parent geographical and technical
              organizational units concerned to fulfill the mission of IEEE.They
              are formed to serve IEEE members by holding meetings at the local
              level.<br></br>
              <br></br>
              IEEE Gujarat Section comes under Asia-Pacific Region, the Region
              10 of IEEE. The Gujarat Section, a sub section of Bombay Section,
              was upgraded to full fledged section on 15th August 1990. In 2004
              Gujarat Section was adjudged the Outstanding Small Section of
              Region 10. 0036.jpg 0036.jpg 2/4 The IEEE GRS Society was first
              known as the Geoscience Electronics Group, formed in 1962. It then
              became the Geoscience Electronics Society in January 1978. Two
              years later, the name of the Society was changed to the Geoscience
              and Remote Sensing Society (GRSS), as it is currently known, to
              more accurately reflect the broad scope of its interests and
              activities. Members of GRSS come from both engineering and
              scientific disciplinary backgrounds. Those with engineering
              backgrounds often support geoscientific investigations with the
              design and development of hardware and data processing techniques,
              thereby requiring of them familiarity in areas such as geophysics,
              geology, hydrology, meteorology, etc. Conversely, discipline
              scientists find in GRSS a forum for the dissemination and
              evaluation of remote sensing related work in these areas. This
              fusion of geoscientific and engineering disciplines gives GRSS a
              unique interdisciplinary character and an exciting role in
              furthering remote sensing science and technology. IEEE GRSS
              Gujarat chapter was formed on 3rd May 2013. <br></br>
              <br></br>The chapter with strength of 26 members distributed among
              various institutes of Gujarat like Space Applications Centre/ISRO,
              Physical Research Laboratory, CEPT University, NIRMA University,
              Gujarat University, M S University, St Xavier’s College, M G
              Science College, Nascent Info technology and independent
              professionals. Thus, a large number of community’s representations
              make the Chapter most lively in its performance<br></br>
            </div>
          </div>
        </Container>
      </ScrollAnimation>
    </Styles>
  );
};

export default AboutUs;
