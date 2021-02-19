import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import YouTube from "react-youtube";
import PDFViewer from "pdf-viewer-reactjs";
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

const Lecture = () => {
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
                  NISAR Science and Applications: Overview
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="main-bg text">
                  <YouTube videoId="cD34Oxwiq7Q" opts={youtubeOptions} />
                  Dr Raj Kumar with more than 30 years of experience is
                  presently leading activities related to understanding Earth
                  System, processes and interactions using earth observation
                  data, and its applications towards societal benefits as well
                  as studies in Planetary sciences. He has primarily carried out
                  research towards the effective utilization of space technology
                  for the studies of ocean, atmosphere and climate for societal
                  benefits. The main focus of his research has been on Satellite
                  data applications for the ocean state predictions with data
                  assimilative numerical models and algorithm development. He is
                  also leading the Indian Science Team for NASA-ISRO joint
                  mission NISAR. He has more than 100 publications in peer
                  reviewed Journals of International repute and leading many
                  young researchers towards their Ph.D. He is recipient of P R
                  Pisharoty Memorial Award, Hari OM Ashram Prerit Dr Vikram
                  Sarabhai Award and ISRO’ Team Excellence Award. ​ ISRO and
                  NASA are jointly developing a state of art L &amp; S band
                  SweepSAR, referred as NISAR scheduled to be launched in 2022.
                  The NISAR mission is expected to provide dual frequency
                  space-borne SAR data with high resolution, larger swath and
                  high repeat cycle, with full-polarimetric capability and
                  Interferometric modes of operation for numerous science
                  studies and host of applications. This talk will focus on the
                  unique features of the dual frequency NISAR as well as the
                  various science studies and applications planned with this
                  mission.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Distiguished lecture Program on GeoAI: Applying Machine
                  Learning and Deep Learning to Geospatial Data by Mr Rohit
                  Singh, ESRI
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="main-bg text">
                  <YouTube videoId="sjhlrrCgKSg" opts={youtubeOptions} />
                  As a part of Distinguished Lecture Program , IEEE-GRSS
                  (Gujarat chapter) organized a webinar session on the
                  topic“GeoAI: Applying Machine Learning and Deep Learning to
                  Geospatial Data" on 31st July, 2020 (5:00 pm to 6:30 pm -IST).
                  The webinar was delivered by Mr. Rohit Singh, who is the
                  managing director of Esri's AI R&D Center at New Delhi. Rohit
                  Singh leads the development of data science, deep learning and
                  geospatial AI solutions in the ArcGIS platform. Rohit is
                  passionate about deep learning and its intersection with
                  geospatial data and satellite imagery. He is a graduate of the
                  Indian Institute of Technology, Kharagpur, and has worked at
                  computer vision startups and IBM before joining Esri. He
                  conceptualized, designed and developed ArcGISPython API,
                  ArcObjects Java, ArcGIS Engine Java API and ArcGIS Enterprise
                  (Linux). In his extremely engaging talk, he introduced the key
                  concepts and the thin line of differences/inter-relationship
                  between Machine learning, Artificial Intelligence and Deep
                  learning. This was followed by an indepth understanding of its
                  application in the Geospatial domain, especially handling of
                  computationally big and volumnious spatial datasets,
                  sturctured and unstructured data, etc. Along with the
                  theorectical concepts and case studies, an extremely
                  interactive demonstration of various AI & ML algorithms in the
                  ArcGIS environment was demostrated on the fly using jupyter
                  notebooks, for thematic applications like identification of
                  buliding footprints, damaged and undamaged ships,
                  identification of road cracks & its types , and many such
                  more. The session was highly enriching and practical oriented,
                  thus allowing students and researchers to gain more techincal
                  insights on this fast growing domain. ​ With 300+
                  registrations, about 173 participants activiely attended the
                  webinar, which included scientistists,industry prfoessionals,
                  students, faculty members and researchers from various parts
                  of the globe namely India, UK, Brazil, Poland, Turkey,
                  Morocco, Netherlands, Canada, Indonesia, US, Egypt, Bolivia,
                  Keny, Nigeria, Myanmar, Nepal, Greece, Germany, Saudi Arabia,
                  China, Malaysia, Phillipines, Israel, Australia, Pakistan,
                  Canada, Spain,Tunisia, Peru, Nigeria, UAE, Thailand, etc. Post
                  the session, an interactive discussion followed.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Distinguished Lecture Program on “Satellite Scatterometry:
                  Winds, Vegetation, and Ice by Dr David G. Long
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="main-bg text">
                  <YouTube videoId="V5uxU8tW-VE" opts={youtubeOptions} />
                  The distinguished lecture program of GRSS was organized on
                  11th September at 4:45 pm using virtual platform. The
                  distinguished lecture was delivered by Dr David G Long. He is
                  faculty of the Electrical and Computer Engineering department
                  (www.ee.byu.edu) at Brigham Young University (www.byu.edu).
                  Before this, he was employed at NASA's Jet Propulsion
                  Laboratory (JPL) in the Radar Science and Engineering Section.
                  He was responsible for the design and development of the NASA
                  Scatterometer (NSCAT) system to measure ocean surface winds
                  from space. NSCAT successfully flew aboard Japanese ADEOS
                  spacecraft in 1996. He was a Group Leader in the Radar Systems
                  Engineering Group at JPL were he supervised work on the design
                  and analysis of spaceborne scatterometer and SAR systems
                  including NSCAT, SIR-C, and Magellan. He was the original
                  Experiment Manager for SCANSCAT (now known as SeaWinds, it was
                  first launched in 1999 on QuikSCAT, again in 2003 on ADEOS-II,
                  and again as RapidScat on the International Space Station in
                  2014). He has received several NASA Award of Achievement and
                  Team Recognition Awards. His research interests include
                  microwave remote sensing, spaceborne scatterometry, synthetic
                  aperture radar, signal processing, polar ice, and mesoscale
                  atmospheric dynamics. He is an associate editor for IEEE
                  Geoscience and Remote Sensing Letters. He is a co-author of
                  the textbook, F. Ulaby and D.G. Long, Microwave Radar and
                  Radiometric Remote Sensing, ISBN: 978-0-472-11935-6,
                  University of Michigan Press, Ann Arbor, Michigan, 2013,
                  available through Artech House and Amazon. ​ ​The topic of
                  lecture was Satellite Scatterometry: Winds, Vegetation, and
                  Ice. With brief introduction about the faculty, Dr David Long
                  presented his research work on Satellite scatterometry with
                  applications related to winds, vegetation and ice. Satellite
                  scatterometers have been built and flown by several nations
                  including, the U.S., ESA, India, and China. Due to coarse
                  resolution of scatterometer, it becomes difficult to evolve
                  land based applications. Reprocessing of data for enhanced
                  resolution foot print of few km helps us to use the instrument
                  for land applications. These enhanced resolution products
                  makes it as a powerful instrument for high resolution
                  wind/rain estimation as well as in a variety of studies of
                  polar ice and tropical vegetation. Dr David Long brought out
                  many applications related to winds, vegetation and Antarctic
                  iceberg monitoring. There were about 70 participants
                  representing different countries.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Microwave Sensing Through the Subsurface for Addressing the
                  Water Puzzle - Prof. Mahta Moghaddam
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="main-bg text">
                  <YouTube videoId="U0JIsFJhqtI" opts={youtubeOptions} />
                  Expert talk by Prof. Mahta Moghaddam (University of Southern
                  California) has been arranged on the topic "Microwave Sensing
                  Through the Subsurface for Addressing the Water Puzzle". ​
                  With increasing population and changes in the global climate,
                  water-related issues have been identified by the Intelligence
                  Community as an important factor in the US world-wide threat
                  assessment. Much of the environmental remote sensing work
                  discussed in this talk has been motivated and designed based
                  on the above recognition. This talk starts by a brief
                  description of some of the critical problems in the remote
                  sensing of water resources today, and discusses how our
                  research addresses several components of these problems by
                  developing new low-frequency (e.g., P-band) spaceborne and
                  airborne radar sensor technologies, electromagnetic scattering
                  and inverse scattering models, and in-situ sensor networks.
                  The emerging research on subsurface characterization is
                  discussed, which aims to map the profiles of soil water
                  content from surface to the root zone, variations in
                  permafrost properties, and groundwater. ​ About Speaker: Mahta
                  Moghaddam is Professor of electrical engineering at the
                  University of Southern California (USC) Ming Hsieh department
                  of electrical engineering. Until 2011, she was at the
                  University of Michigan. She received the Ph.D. degree in
                  electrical and computer engineering from the University of
                  Illinois, Urbana, in 1991. From 1991 to 2003, she was with the
                  Jet Propulsion Laboratory (JPL), Pasadena, CA. During the past
                  ~25 years of active involvement in environmental remote
                  sensing Dr. Moghaddam has introduced new approaches for
                  quantitative interpretation of synthetic aperture radar
                  imagery. Her most recent contributions include the development
                  of new radar measurement technologies for subsurface and
                  subcanopy characterization, development of forward and inverse
                  scattering techniques for layered random media with rough
                  interfaces, developing sensor web technologies for in-situ
                  environmental sensing, and transforming concepts of radar
                  remote sensing to high-resolution medical imaging. She is a
                  member of the NASA Soil Moisture Active and Passive (SMAP)
                  mission Science Team, member of the Arctic-Boreal
                  Vulnerability Experiment (ABoVE) Science Team, and was the PI
                  for AirMOSS NASA Earth Ventures Suborbital 1 Mission. She is a
                  Fellow of IEEE, Editor-in-Chief of the IEEE Antennas and
                  Propagation Magazine, and a 2016 recipient of the NASA
                  Outstanding Public Leadership Medal for “Outstanding
                  Leadership in Advancement of Microwave Remote Sensing.”
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Machine Learning for Remote Sensing Data Analysis - Dr Gustau
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="main-bg text">
                  Distinguished Lecture program by Dr Gustau Camps-Valls,
                  Universitat de València, Spain, Topic:" Machine Learning for
                  Remote Sensing Data Analysis, CEPT University, May 2019
                  <PDFViewer
                    document={{
                      url: "https://drive.google.com/file/d/10Bve8QoaTVwg313P-StJwzCJj7_mDKyq/view?usp=sharing",
                    }}
                  />
                  <PDFViewer
                    document={{
                      url: "https://drive.google.com/file/d/15bBw4gI9sa1WzQ__fHvK6tm2qPYeHiH8/view?usp=sharing",
                    }}
                  />
                  <PDFViewer
                    document={{
                      url: "https://drive.google.com/file/d/1oyxA1enpRkl4UE6-iR4Kv-BF68IuNsU4/view?usp=sharing",
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

export default Lecture;
