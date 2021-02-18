import React from "react";
import { CardColumns, Card } from "react-bootstrap";
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
import maneesha from "../assets/maneesha.jpg"
import abhijit from "../assets/abhijit.jpg"
import ami from "../assets/ami.jpg";
import indrani from "../assets/indrani.jpg"
import shaily from "../assets/shaily.png"
import nand from "../assets/nand.jpg"
import samarpita from "../assets/samarpita.jpg"
import dharmendra from "../assets/dharmendra.png"
import male_profile from "../assets/male_profile.png";
import female_profile from "../assets/female_profile.jpg";
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text {
    color: black;
  }
  .padding {
    margin: 15px;
  }
`;
const FounderMembers = () => {
  return (
    <Styles>
      <div className="main-bg text">
        <CardColumns>
          <Card className="padding w-75">
            <Card.Img variant="top" src={shivmohan} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Shiv Mohan <br></br>[Chair Person]
              </Card.Title>
              <Card.Text>
                Visiting Scientist <br></br>
                PLANEX, Physical Research Laboratory <br></br>
                Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
                Former Scientist, Space Applications Centre (ISRO), Ahmedabad{" "}
                <br></br>
                Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
                Email: shivmohan.isro@gmail.com <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={arup} height="300px" />
            <Card.Body>
              <Card.Title>
                Arup Dasgupta <br></br>[Life Senior]
              </Card.Title>
              <Card.Text>
                Managing Editor at Geospatial Media and Communications
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={anup} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Anup Kumar Das <br></br>[Senior Member]
              </Card.Title>
              <Card.Text>
                Scientist / Engineer<br></br>
                Space Applications Centre (ISRO)<br></br>
                Dept. of Space, Govt. of India<br></br>
                Ahmedabad – 380015 (Gujarat)<br></br>
                Ph: +91-79-2691 4003 (O); +91-79-2686 1445 (R)<br></br>
                Email: anup@sac.isro.gov.in; anup_k_das@rediffmail.com <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={kaushal} height="300px" />
            <Card.Body>
              <Card.Title>
                Kaushal Buch<br></br>[Senior Member]
              </Card.Title>
              <Card.Text>
                Senior Engineer (Backend Systems)<br></br>
                Giant Metrewave Radio Telescope (GMRT) of the National Centre
                for Radio Astrophysics, TIFR<br></br>
                Pune, India<br></br>
                Phone No :<br></br>
                Email: kaushal.buch@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={tanish} height="300px" />
            <Card.Body>
              <Card.Title>
                Tanish Hemal Zaveri <br></br>[Senior Member]
              </Card.Title>
              <Card.Text>
                Associate Professor<br></br>
                Nirma University<br></br>
                Ahmedabad<br></br>
                Mobile: 917929298609<br></br>
                E-mail:ztanish@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={pooja} height="300px" />
            <Card.Body>
              <Card.Title>
                Prof. Pooja Shah<br></br>[Senior Member]
              </Card.Title>
              <Card.Text>
                Nirma University<br></br>
                Ahmedabad<br></br>
                E-mail: pooja.shah@nirmauni.ac.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={aishwarya} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr Aishwarya Narain<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Nascent Info Technologies Private Limited<br></br>A 605, Shapath
                IV, Opp. Karnavati Club,<br></br>
                S.G. Highway,<br></br>
                Ahmedabad 380015<br></br>
                Ph.: +917567301000 (O);<br></br>
                Mobile +919879133828<br></br>
                E-mail:aishwarya19@yahoo.com; narain@nascentinfo.net<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={parul} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Parul Patel<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Professor<br></br>
                Civil Engineering Department,<br></br>
                Institute of TechnologyNirma University,<br></br>
                Ahmedabad-382 481<br></br>
                Ph: +91-2717-24191115 (extn. 214);<br></br>
                Mobile: +91-9429438562<br></br>
                Email: parul.patel@nirmauni.ac.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={suchit} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Suchit Purohit <br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Lecturer<br></br>
                Department of Computer Science<br></br>
                Gujarat University,<br></br>
                Navrangpura<br></br>
                Ahmedabad -380009 (Gujarat)<br></br>
                Ph: +91-79-26300877;<br></br>
                Mobile:+919913419959<br></br>
                Email: suchitpurohit@yahoo.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={alpana} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Alpana M. Shukla <br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Associate Professor,<br></br>
                Head, Department of Botany<br></br>
                M.G. Science Institute,<br></br>
                Ahmedabad-380009, Gujarat<br></br>
                Ph: +91-79-26302872 (O); +91-79-26609759 (R)<br></br>
                Mobile: +91-9727716264<br></br>
                E-mail: alpana.botany@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={maneesha} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Maneesha Gupta <br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Scientist/Engineer<br></br>
                Space Applications Centre (ISRO)<br></br>
                Department of Space,<br></br>
                Govt. of IndiaAhmedabad -380015 (Gujarat)<br></br>
                Ph: +91-79-2691 4796/02(O);<br></br>
                Mobile: +91 937-5031-959<br></br>
                Email:maneesha@sac.isro.gov.in; maneesha.nano@gmail.com{" "}
                <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={abhijit} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Abhijit Sarkar <br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Freelance Consultant<br></br>
                Former Group Head, SAC (ISRO)<br></br>
                Ahmedabad, India<br></br>
                Ph: +91-79-26731255; Mobile: 0-9426301523<br></br>
                Email: sakar.abhi@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={ami} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Ami J Desai <br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Post Doctoral Fellow<br></br>
                Physical Research Laboratory<br></br>
                Ahmedabad – 380054<br></br>
                (Gujarat)<br></br>
                Ph: +91-79-2631 4515 (O)<br></br>
                Email: amidesai@prl.res.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={indrani} height="300px" />
            <Card.Body>
              <Card.Title>
                Indrani Choudhary Singh<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                DST Women Scientist,<br></br>
                Space Application Center,ISRO,<br></br>
                Ahmedabad-380015<br></br>
                Email: icaug4@yahoo.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={sriram} height="300px" />
            <Card.Body>
              <Card.Title>
                Sriram Saran<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Senior Research Scholar <br></br>
                Space Applications Centre (ISRO)<br></br>
                Department of Space, Govt. of India<br></br>
                Ahmedabad -380015 (Gujarat)<br></br>
                Ph: +91-79-2691 4134 (O); Mobile: +91-9727263735<br></br>
                Email: saran@sac.isro.gov.in; saran_sriram7@yahoo.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={shaily} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Shaily Gandhi<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Manager IT and Geospatial Solution<br></br>
                CEPT Research and Development Foundation<br></br>
                Data Carpentry Instructor <br></br>
                Ahmedabad-380015<br></br>
                Phone No :<br></br>
                Email: shaily.gandhi@cept.ac.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={nand} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Nandakumar Ramanathan<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                B-25, New Anuradha Association<br></br>
                Off Bopal-Ghuma Road Near Kabir Enclave<br></br>
                Ghuma -29795839<br></br>
                Email: nand.isro@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={female_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Shital Shukla<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Gujarat University<br></br>
                Email: shitalshukla25@yahoo.co.in <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={samarpita} height="300px" />
            <Card.Body>
              <Card.Title>
                Samarpita Sarkar<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Scientist/Engineer<br></br>
                Space Application Center,ISRO,<br></br>
                Ahmedabad-380015<br></br>
                Email: samar1207@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={female_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Bindi Dave<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                CEPT University<br></br>
                Email: shastribindy@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={male_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Sushil Kumar Singh<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Room No. 4362, CSD/GHCAG/EPSA<br></br>
                Space Applications Centre <br></br>
                ISRO<br></br>
                Email: sushil@sac.isro.gov.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={male_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Arvind Kumar Singh<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Space Applications Centre<br></br>
                Email: aks5371@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={female_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Jaishree Tailor<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                SRIMCA<br></br>
                Bardoli Gujarat 394601<br></br>
                Email: tailorjaishreek@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={male_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Hetul Patel<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Vadodara <br></br>
                Gujarat 390023 <br></br>
                Email: hvp.sci@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={male_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Mehul Maiseri<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                CEPT University<br></br>
                Email: mehul.maiseri.mgeo17@cept.ac.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={dharmendra} height="300px" />
            <Card.Body>
              <Card.Title>
                Dharmendra Kumar Pandey<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Ahmedabad Gujarat 380015 <br></br>
                Space Applications Centre (ISRO) <br></br>
                Email: dkp@sac.isro.gov.in <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={male_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Raj Kumar Sharma<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                4024, EPSA<br></br>
                Space Applications Centre (ISRO)<br></br>
                Indian Space Research Organisation <br></br>
                Ahmedabad Gujarat 380015<br></br>
                Email: rkumar.sharma@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={female_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Usha Dineshbhai Patel<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Nirma University<br></br>
                Ahmedabad Gujarat 380060<br></br>
                Email: ushapatel@nirmauni.ac.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={female_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Durga Prasad Karanam<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Planetary Sciences Division((Thaltej)<br></br>
                Physical Research Laboratory, <br></br>
                PSDN, Gujarat <br></br>
                Email: durgaprasad@prl.res.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={male_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Dr. Anand Sahadevan<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Space Applications Centre, ISRO<br></br>
                Ahmedabad Gujarat 380015<br></br>
                Email: toanandss@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding w-75">
            <Card.Img variant="top" src={female_profile} height="300px" />
            <Card.Body>
              <Card.Title>
                Rimjhim Bhatnagar<br></br>ProfessionalMember
              </Card.Title>
              <Card.Text>
                Space Applications Centre, ISRO<br></br>
                AHMEDABAD Gujarat 380015<br></br>
                Email: meetrbs@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </Styles>
  );
};
export default FounderMembers;
