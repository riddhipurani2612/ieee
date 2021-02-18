import React from "react";
import { Figure, Container } from "react-bootstrap";
import styled from "styled-components";
import event1 from "../assets/event1.jpg"
import event2 from "../assets/event2.jpg"
import event3 from "../assets/event3.png"

const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text {
    color: white;
  }
  .hr {
    border-color: white;
  }
`;
const Events = () => {
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div className="display-4 text-center">
            Distinguished Lecture Program on “Satellite Scatterometry: Winds,
            Vegetation, and Ice by Dr David G. Long
          </div>
          <div>
            <Figure>
              <Figure.Image src={event1} alt="Image"></Figure.Image>
            </Figure>
            <Figure.Caption className="text text-justify">
              The distinguished lecture program of GRSS was organized on 11th
              September at 4:45 pm using virtual platform. The distinguished
              lecture was delivered by Dr David G Long. He is faculty of the
              Electrical and Computer Engineering department (www.ee.byu.edu) at
              Brigham Young University (www.byu.edu). Before this, he was
              employed at NASA's Jet Propulsion Laboratory (JPL) in the Radar
              Science and Engineering Section. He was responsible for the design
              and development of the NASA Scatterometer (NSCAT) system to
              measure ocean surface winds from space. NSCAT successfully flew
              aboard Japanese ADEOS spacecraft in 1996. He was a Group Leader in
              the Radar Systems Engineering Group at JPL were he supervised work
              on the design and analysis of spaceborne scatterometer and SAR
              systems including NSCAT, SIR-C, and Magellan. He was the original
              Experiment Manager for SCANSCAT (now known as SeaWinds, it was
              first launched in 1999 on QuikSCAT, again in 2003 on ADEOS-II, and
              again as RapidScat on the International Space Station in 2014). He
              has received several NASA Award of Achievement and Team
              Recognition Awards. His research interests include microwave
              remote sensing, spaceborne scatterometry, synthetic aperture
              radar, signal processing, polar ice, and mesoscale atmospheric
              dynamics. He is an associate editor for IEEE Geoscience and Remote
              Sensing Letters. He is a co-author of the textbook, F. Ulaby and
              D.G. Long, Microwave Radar and Radiometric Remote Sensing, ISBN:
              978-0-472-11935-6, University of Michigan Press, Ann Arbor,
              Michigan, 2013, available through Artech House and Amazon. ​The
              topic of lecture was Satellite Scatterometry: Winds, Vegetation,
              and Ice. With brief introduction about the faculty, Dr David Long
              presented his research work on Satellite scatterometry with
              applications related to winds, vegetation and ice. Satellite
              scatterometers have been built and flown by several nations
              including, the U.S., ESA, India, and China. Due to coarse
              resolution of scatterometer, it becomes difficult to evolve land
              based applications. Reprocessing of data for enhanced resolution
              foot print of few km helps us to use the instrument for land
              applications. These enhanced resolution products makes it as a
              powerful instrument for high resolution wind/rain estimation as
              well as in a variety of studies of polar ice and tropical
              vegetation. Dr David Long brought out many applications related to
              winds, vegetation and Antarctic iceberg monitoring. There were
              about 70 participants representing different countries.
            </Figure.Caption>
          </div>
          <div className="display-4 text-center">
            Distiguished lecture Program on GeoAI: Applying Machine Learning and
            Deep Learning to Geospatial Data by Mr Rohit Singh, ESRI
          </div>
          <div>
            <Figure>
              <Figure.Image src={event2} alt="Image"></Figure.Image>
            </Figure>
            <Figure.Caption className="text text-justify">
              As a part of Distinguished Lecture Program , IEEE-GRSS (Gujarat
              chapter) organized a webinar session on the topic“GeoAI: Applying
              Machine Learning and Deep Learning to Geospatial Data" on 31st
              July, 2020 (5:00 pm to 6:30 pm -IST). The webinar was delivered by
              Mr. Rohit Singh, who is the managing director of Esri's AI R&amp;D
              Center at New Delhi. Rohit Singh leads the development of data
              science, deep learning and geospatial AI solutions in the ArcGIS
              platform. Rohit is passionate about deep learning and its
              intersection with geospatial data and satellite imagery. He is a
              graduate of the Indian Institute of Technology, Kharagpur, and has
              worked at computer vision startups and IBM before joining Esri. He
              conceptualized, designed and developed ArcGISPython API,
              ArcObjects Java, ArcGIS Engine Java API and ArcGIS Enterprise
              (Linux).
            </Figure.Caption>
          </div>
          <div className="display-4 text-center">
            Interaction meeting with CEPT University Geomatics students
          </div>
          <div>
            <Figure>
              <Figure.Image src={event3} alt="Image"></Figure.Image>
            </Figure>
            <Figure.Caption className="text text-justify">
              An interaction meeting was conducted virtually for the students of
              M Tech (Geomatics) of CEPT University towards promoting the
              activities of IEEE GRSS and bringing the benefit to students.
              Meeting was organized by IEEE GRSS and coordinated by Dr Dipak
              Samal of CEPT University. There were 43 participants in the
              meeting. Dr Shiv Mohan informed the participants about IEEE and
              GRSS Society, which is one of the largest professional societies
              in the world. Dr Aishwarya Narain informed the participants about
              the Collaborate program of society and its benefits to members. Dr
              Anup Das described various benefits of the society to its members
              and in particular to student community. Dr Bindi Dave brought out
              the benefit to her as a student and professionals member of the
              society. Dr Shaily Gandhi also informed the students about various
              benefits to her as student and professional members. It is
              proposed to continue the activities in the interest of students
              and professionals of CET University, Ahmedabad.
            </Figure.Caption>
          </div>
        </Container>
      </div>
    </Styles>
  );
};
export default Events;
