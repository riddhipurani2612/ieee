import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import shivmohan from "../assets/shivmohan.jpg";
import aishwarya from "../assets/aishwarya.jpg";
import anup from "../assets/anup.jpg";
import parul from "../assets/parul.jpg";
import suchit from "../assets/suchit.jpeg";
import sriram from "../assets/sriram.jpg";
import arup from "../assets/arup.jpg";
import kaushal from "../assets/kaushal.jpg";
import tanish from "../assets/tanish.jpg";
import pooja from "../assets/pooja.jpg";
import alpana from "../assets/alpana.jpg";
import maneesha from "../assets/maneesha.jpg";
import abhijit from "../assets/abhijit.jpg";
import ami from "../assets/ami.jpg";
import indrani from "../assets/indrani.jpg";
import shaily from "../assets/shaily.png";
import nand from "../assets/nand.jpg";
import samarpita from "../assets/samarpita.jpg";
import dharmendra from "../assets/dharmendra.png";
import male_profile from "../assets/male_profile.png";
import female_profile from "../assets/female_profile.jpg";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
}
.text {
  color: #dbf1fb;
}
  .padding {
    margin: 15px;
  }
`;
const ProfessionalMembers = () => {
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <ListGroup>
          <div className="display-3 main-bg text">Professional Members</div>
            <br></br><br></br>
            <div className="display-4 main-bg text">Chair</div>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={shivmohan} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Shiv Mohan Visiting Scientist <br></br>
                  PLANEX, Physical Research Laboratory <br></br>
                  Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
                  Former Scientist, Space Applications Centre (ISRO), Ahmedabad
                  <br></br>
                  Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                  Email: shivmohan.isro@gmail.com <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <div className="display-3 main-bg text">Life Senior</div>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={arup} height="150px" width="150px" />
                </Col>
                <Col>
                  Arup Dasgupta Managing Editor at Geospatial Media and
                  Communications
                </Col>
              </Row>
            </ListGroup.Item>
            <div className="display-4 main-bg text">Senior Member</div>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={anup} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Anup Kumar Das <br></br>
                  Scientist / Engineer<br></br>
                  Space Applications Centre (ISRO)<br></br>
                  Dept. of Space, Govt. of India<br></br>
                  Ahmedabad – 380015 (Gujarat)<br></br>
                  Ph: +91-79-2691 4003 (O); +91-79-2686 1445 (R)<br></br>
                  Email: anup@sac.isro.gov.in; anup_k_das@rediffmail.com
                  <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                  <img src={kaushal} height="150px" width="150px" />
                </Col>
                <Col>
                  Kaushal Buch<br></br>
                  Senior Engineer (Backend Systems)<br></br>
                  Giant Metrewave Radio Telescope (GMRT) of the National Centre
                  for Radio Astrophysics, TIFR<br></br>
                  Pune, India<br></br>
                  Phone No :<br></br>
                  Email: kaushal.buch@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={tanish} height="150px" width="150px" />
                </Col>
                <Col>
                  Tanish Hemal Zaveri <br></br>
                  Associate Professor<br></br>
                  Nirma University<br></br>
                  Ahmedabad<br></br>
                  Mobile: 917929298609<br></br>
                  E-mail:ztanish@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={pooja} height="150px" width="150px" />
                </Col>
                <Col>
                  Prof. Pooja Shah<br></br>
                  Nirma University<br></br>
                  Ahmedabad<br></br>
                  E-mail: pooja.shah@nirmauni.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <div className="display-4 main-bg text">Professional Member</div>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={aishwarya} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr Aishwarya Narain<br></br>
                  Nascent Info Technologies Private Limited<br></br>A 605,
                  Shapath IV, Opp. Karnavati Club,<br></br>
                  S.G. Highway,<br></br>
                  Ahmedabad 380015<br></br>
                  Ph.: +917567301000 (O);<br></br>
                  Mobile +919879133828<br></br>
                  E-mail:aishwarya19@yahoo.com; narain@nascentinfo.net<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={parul} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Parul Patel<br></br>
                  Professor<br></br>
                  Civil Engineering Department,<br></br>
                  Institute of TechnologyNirma University,<br></br>
                  Ahmedabad-382 481<br></br>
                  Ph: +91-2717-24191115 (extn. 214);<br></br>
                  Mobile: +91-9429438562<br></br>
                  Email: parul.patel@nirmauni.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={suchit} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Suchit Purohit <br></br>
                  Lecturer<br></br>
                  Department of Computer Science<br></br>
                  Gujarat University,<br></br>
                  Navrangpura<br></br>
                  Ahmedabad -380009 (Gujarat)<br></br>
                  Ph: +91-79-26150877;<br></br>
                  Mobile:+919913419959<br></br>
                  Email: suchitpurohit@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={alpana} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Alpana M. Shukla <br></br>
                  Associate Professor,<br></br>
                  Head, Department of Botany<br></br>
                  M.G. Science Institute,<br></br>
                  Ahmedabad-380009, Gujarat<br></br>
                  Ph: +91-79-26302872 (O); +91-79-26609759 (R)<br></br>
                  Mobile: +91-9727716264<br></br>
                  E-mail: alpana.botany@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={maneesha} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Maneesha Gupta <br></br>
                  Scientist/Engineer<br></br>
                  Space Applications Centre (ISRO)<br></br>
                  Department of Space,<br></br>
                  Govt. of IndiaAhmedabad -380015 (Gujarat)<br></br>
                  Ph: +91-79-2691 4796/02(O);<br></br>
                  Mobile: +91 937-5031-959<br></br>
                  Email:maneesha@sac.isro.gov.in; maneesha.nano@gmail.com
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={abhijit} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Abhijit Sarkar <br></br>
                  Freelance Consultant<br></br>
                  Former Group Head, SAC (ISRO)<br></br>
                  Ahmedabad, India<br></br>
                  Ph: +91-79-26731255; Mobile: 0-9426301523<br></br>
                  Email: sakar.abhi@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={ami} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Ami J Desai <br></br>
                  Post Doctoral Fellow<br></br>
                  Physical Research Laboratory<br></br>
                  Ahmedabad – 380054<br></br>
                  (Gujarat)<br></br>
                  Ph: +91-79-2631 4515 (O)<br></br>
                  Email: amidesai@prl.res.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={indrani} height="150px" width="150px" />
                </Col>
                <Col>
                  Indrani Choudhary Singh<br></br>
                  DST Women Scientist,<br></br>
                  Space Application Center,ISRO,<br></br>
                  Ahmedabad-380015<br></br>
                  Email: icaug4@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={sriram} height="150px" width="150px" />
                </Col>
                <Col>
                  Sriram Saran<br></br>
                  Senior Research Scholar <br></br>
                  Space Applications Centre (ISRO)<br></br>
                  Department of Space, Govt. of India<br></br>
                  Ahmedabad -380015 (Gujarat)<br></br>
                  Ph: +91-79-2691 4134 (O); Mobile: +91-9727263735<br></br>
                  Email: saran@sac.isro.gov.in; saran_sriram7@yahoo.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={shaily} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Shaily Gandhi<br></br>
                  Manager IT and Geospatial Solution<br></br>
                  CEPT Research and Development Foundation<br></br>
                  Data Carpentry Instructor <br></br>
                  Ahmedabad-380015<br></br>
                  Phone No :<br></br>
                  Email: shaily.gandhi@cept.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={nand} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Nandakumar Ramanathan<br></br>
                  B-25, New Anuradha Association<br></br>
                  Off Bopal-Ghuma Road Near Kabir Enclave<br></br>
                  Ghuma -29795839<br></br>
                  Email: nand.isro@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={female_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Shital Shukla<br></br>
                  Gujarat University<br></br>
                  Email: shitalshukla25@yahoo.co.in <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={samarpita} height="150px" width="150px" />
                </Col>
                <Col>
                  Samarpita Sarkar<br></br>
                  Scientist/Engineer<br></br>
                  Space Application Center,ISRO,<br></br>
                  Ahmedabad-380015<br></br>
                  Email: samar1207@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={female_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Bindi Dave<br></br>
                  CEPT University<br></br>
                  Email: shastribindy@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={male_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Sushil Kumar Singh<br></br>
                  Room No. 4362, CSD/GHCAG/EPSA<br></br>
                  Space Applications Centre <br></br>
                  ISRO<br></br>
                  Email: sushil@sac.isro.gov.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={male_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Arvind Kumar Singh<br></br>
                  Space Applications Centre<br></br>
                  Email: aks5371@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={female_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Jaishree Tailor<br></br>
                  SRIMCA<br></br>
                  Bardoli Gujarat 394601<br></br>
                  Email: tailorjaishreek@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={male_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Hetul Patel<br></br>
                  Vadodara <br></br>
                  Gujarat 390023 <br></br>
                  Email: hvp.sci@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={male_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Mehul Maiseri<br></br>
                  CEPT University<br></br>
                  Email: mehul.maiseri.mgeo17@cept.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={dharmendra} height="150px" width="150px" />
                </Col>
                <Col>
                  Dharmendra Kumar Pandey<br></br>
                  Ahmedabad Gujarat 380015 <br></br>
                  Space Applications Centre (ISRO) <br></br>
                  Email: dkp@sac.isro.gov.in <br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={male_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Raj Kumar Sharma<br></br>
                  4024, EPSA<br></br>
                  Space Applications Centre (ISRO)<br></br>
                  Indian Space Research Organisation <br></br>
                  Ahmedabad Gujarat 380015<br></br>
                  Email: rkumar.sharma@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={female_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Usha Dineshbhai Patel<br></br>
                  Nirma University<br></br>
                  Ahmedabad Gujarat 380060<br></br>
                  Email: ushapatel@nirmauni.ac.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={female_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Durga Prasad Karanam<br></br>
                  Planetary Sciences Division((Thaltej)<br></br>
                  Physical Research Laboratory, <br></br>
                  PSDN, Gujarat <br></br>
                  Email: durgaprasad@prl.res.in<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={male_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Dr. Anand Sahadevan<br></br>
                  Space Applications Centre, ISRO<br></br>
                  Ahmedabad Gujarat 380015<br></br>
                  Email: toanandss@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="main-bg text">
              <Row>
                <Col>
                  <img src={female_profile} height="150px" width="150px" />
                </Col>
                <Col>
                  Rimjhim Bhatnagar<br></br>
                  Space Applications Centre, ISRO<br></br>
                  AHMEDABAD Gujarat 380015<br></br>
                  Email: meetrbs@gmail.com<br></br>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    </Styles>
  );
};
export default ProfessionalMembers;
