import React from "react";
import { ListGroup } from "react-bootstrap";
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
        <ListGroup>
          <ListGroup.Item>
            <img src={shivmohan} height="300px" />
            <div className="display-3">Dr. Shiv Mohan</div>
            <div>
              Visiting Scientist <br></br>
              PLANEX, Physical Research Laboratory <br></br>
              Thaltej Campus, Ahmedabad – 380059 (Gujarat), India <br></br>
              Former Scientist, Space Applications Centre (ISRO), Ahmedabad{" "}
              <br></br>
              Ph: +91-79-26850454; Mobile: 0-9712128524 <br></br>
              Email: shivmohan.isro@gmail.com <br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={arup} height="300px" />
            <div className="display-3">
              Arup Dasgupta <br></br>[Life Senior]
            </div>
            <div>Managing Editor at Geospatial Media and Communications</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={anup} height="300px" />
            <div className="display-3">
              Dr. Anup Kumar Das <br></br>[Senior Member]
            </div>
            <div>
              Scientist / Engineer<br></br>
              Space Applications Centre (ISRO)<br></br>
              Dept. of Space, Govt. of India<br></br>
              Ahmedabad – 380015 (Gujarat)<br></br>
              Ph: +91-79-2691 4003 (O); +91-79-2686 1445 (R)<br></br>
              Email: anup@sac.isro.gov.in; anup_k_das@rediffmail.com <br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={kaushal} height="300px" />
            <div className="display-3">
              Kaushal Buch<br></br>[Senior Member]
            </div>
            <div>
              Senior Engineer (Backend Systems)<br></br>
              Giant Metrewave Radio Telescope (GMRT) of the National Centre for
              Radio Astrophysics, TIFR<br></br>
              Pune, India<br></br>
              Phone No :<br></br>
              Email: kaushal.buch@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={tanish} height="300px" />
            <div className="display-3">
              Tanish Hemal Zaveri <br></br>[Senior Member]
            </div>
            <div>
              Associate Professor<br></br>
              Nirma University<br></br>
              Ahmedabad<br></br>
              Mobile: 917929298609<br></br>
              E-mail:ztanish@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={pooja} height="300px" />
            <div className="display-3">
              Prof. Pooja Shah<br></br>[Senior Member]
            </div>
            <div>
              Nirma University<br></br>
              Ahmedabad<br></br>
              E-mail: pooja.shah@nirmauni.ac.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={aishwarya} height="300px" />
            <div className="display-3">
              Dr Aishwarya Narain<br></br>ProfessionalMember
            </div>
            <div>
              Nascent Info Technologies Private Limited<br></br>A 605, Shapath
              IV, Opp. Karnavati Club,<br></br>
              S.G. Highway,<br></br>
              Ahmedabad 380015<br></br>
              Ph.: +917567301000 (O);<br></br>
              Mobile +919879133828<br></br>
              E-mail:aishwarya19@yahoo.com; narain@nascentinfo.net<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={parul} height="300px" />
            <div className="display-3">
              Dr. Parul Patel<br></br>ProfessionalMember
            </div>
            <div>
              Professor<br></br>
              Civil Engineering Department,<br></br>
              Institute of TechnologyNirma University,<br></br>
              Ahmedabad-382 481<br></br>
              Ph: +91-2717-24191115 (extn. 214);<br></br>
              Mobile: +91-9429438562<br></br>
              Email: parul.patel@nirmauni.ac.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={suchit} height="300px" />
            <div className="display-3">
              Dr. Suchit Purohit <br></br>ProfessionalMember
            </div>
            <div>
              Lecturer<br></br>
              Department of Computer Science<br></br>
              Gujarat University,<br></br>
              Navrangpura<br></br>
              Ahmedabad -380009 (Gujarat)<br></br>
              Ph: +91-79-26300877;<br></br>
              Mobile:+919913419959<br></br>
              Email: suchitpurohit@yahoo.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={alpana} height="300px" />
            <div className="display-3">
              Dr. Alpana M. Shukla <br></br>ProfessionalMember
            </div>
            <div>
              Associate Professor,<br></br>
              Head, Department of Botany<br></br>
              M.G. Science Institute,<br></br>
              Ahmedabad-380009, Gujarat<br></br>
              Ph: +91-79-26302872 (O); +91-79-26609759 (R)<br></br>
              Mobile: +91-9727716264<br></br>
              E-mail: alpana.botany@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={maneesha} height="300px" />
            <div className="display-3">
              Dr. Maneesha Gupta <br></br>ProfessionalMember
            </div>
            <div>
              Scientist/Engineer<br></br>
              Space Applications Centre (ISRO)<br></br>
              Department of Space,<br></br>
              Govt. of IndiaAhmedabad -380015 (Gujarat)<br></br>
              Ph: +91-79-2691 4796/02(O);<br></br>
              Mobile: +91 937-5031-959<br></br>
              Email:maneesha@sac.isro.gov.in; maneesha.nano@gmail.com{" "}
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={abhijit} height="300px" />
            <div className="display-3">
              Dr. Abhijit Sarkar <br></br>ProfessionalMember
            </div>
            <div>
              Freelance Consultant<br></br>
              Former Group Head, SAC (ISRO)<br></br>
              Ahmedabad, India<br></br>
              Ph: +91-79-26731255; Mobile: 0-9426301523<br></br>
              Email: sakar.abhi@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={ami} height="300px" />
            <div className="display-3">
              Dr. Ami J Desai <br></br>ProfessionalMember
            </div>
            <div>
              Post Doctoral Fellow<br></br>
              Physical Research Laboratory<br></br>
              Ahmedabad – 380054<br></br>
              (Gujarat)<br></br>
              Ph: +91-79-2631 4515 (O)<br></br>
              Email: amidesai@prl.res.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={indrani} height="300px" />
            <div className="display-3">
              Indrani Choudhary Singh<br></br>ProfessionalMember
            </div>
            <div>
              DST Women Scientist,<br></br>
              Space Application Center,ISRO,<br></br>
              Ahmedabad-380015<br></br>
              Email: icaug4@yahoo.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={sriram} height="300px" />
            <div className="display-3">
              Sriram Saran<br></br>ProfessionalMember
            </div>
            <div>
              Senior Research Scholar <br></br>
              Space Applications Centre (ISRO)<br></br>
              Department of Space, Govt. of India<br></br>
              Ahmedabad -380015 (Gujarat)<br></br>
              Ph: +91-79-2691 4134 (O); Mobile: +91-9727263735<br></br>
              Email: saran@sac.isro.gov.in; saran_sriram7@yahoo.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={shaily} height="300px" />
            <div className="display-3">
              Dr. Shaily Gandhi<br></br>ProfessionalMember
            </div>
            <div>
              Manager IT and Geospatial Solution<br></br>
              CEPT Research and Development Foundation<br></br>
              Data Carpentry Instructor <br></br>
              Ahmedabad-380015<br></br>
              Phone No :<br></br>
              Email: shaily.gandhi@cept.ac.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={nand} height="300px" />
            <div className="display-3">
              Dr. Nandakumar Ramanathan<br></br>ProfessionalMember
            </div>
            <div>
              B-25, New Anuradha Association<br></br>
              Off Bopal-Ghuma Road Near Kabir Enclave<br></br>
              Ghuma -29795839<br></br>
              Email: nand.isro@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={female_profile} height="300px" />
            <div className="display-3">
              Dr. Shital Shukla<br></br>ProfessionalMember
            </div>
            <div>
              Gujarat University<br></br>
              Email: shitalshukla25@yahoo.co.in <br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={samarpita} height="300px" />
            <div className="display-3">
              Samarpita Sarkar<br></br>ProfessionalMember
            </div>
            <div>
              Scientist/Engineer<br></br>
              Space Application Center,ISRO,<br></br>
              Ahmedabad-380015<br></br>
              Email: samar1207@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={female_profile} height="300px" />
            <div className="display-3">
              Dr. Bindi Dave<br></br>ProfessionalMember
            </div>
            <div>
              CEPT University<br></br>
              Email: shastribindy@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={male_profile} height="300px" />
            <div className="display-3">
              Sushil Kumar Singh<br></br>ProfessionalMember
            </div>
            <div>
              Room No. 4362, CSD/GHCAG/EPSA<br></br>
              Space Applications Centre <br></br>
              ISRO<br></br>
              Email: sushil@sac.isro.gov.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={male_profile} height="300px" />
            <div className="display-3">
              Dr. Arvind Kumar Singh<br></br>ProfessionalMember
            </div>
            <div>
              Space Applications Centre<br></br>
              Email: aks5371@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={female_profile} height="300px" />
            <div className="display-3">
              Dr. Jaishree Tailor<br></br>ProfessionalMember
            </div>
            <div>
              SRIMCA<br></br>
              Bardoli Gujarat 394601<br></br>
              Email: tailorjaishreek@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={male_profile} height="300px" />
            <div className="display-3">
              Hetul Patel<br></br>ProfessionalMember
            </div>
            <div>
              Vadodara <br></br>
              Gujarat 390023 <br></br>
              Email: hvp.sci@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={male_profile} height="300px" />
            <div className="display-3">
              Mehul Maiseri<br></br>ProfessionalMember
            </div>
            <div>
              CEPT University<br></br>
              Email: mehul.maiseri.mgeo17@cept.ac.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={dharmendra} height="300px" />
            <div className="display-3">
              Dharmendra Kumar Pandey<br></br>ProfessionalMember
            </div>
            <div>
              Ahmedabad Gujarat 380015 <br></br>
              Space Applications Centre (ISRO) <br></br>
              Email: dkp@sac.isro.gov.in <br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={male_profile} height="300px" />
            <div className="display-3">
              Raj Kumar Sharma<br></br>ProfessionalMember
            </div>
            <div>
              4024, EPSA<br></br>
              Space Applications Centre (ISRO)<br></br>
              Indian Space Research Organisation <br></br>
              Ahmedabad Gujarat 380015<br></br>
              Email: rkumar.sharma@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={female_profile} height="300px" />
            <div className="display-3">
              Usha Dineshbhai Patel<br></br>ProfessionalMember
            </div>
            <div>
              Nirma University<br></br>
              Ahmedabad Gujarat 380060<br></br>
              Email: ushapatel@nirmauni.ac.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={female_profile} height="300px" />
            <div className="display-3">
              Durga Prasad Karanam<br></br>ProfessionalMember
            </div>
            <div>
              Planetary Sciences Division((Thaltej)<br></br>
              Physical Research Laboratory, <br></br>
              PSDN, Gujarat <br></br>
              Email: durgaprasad@prl.res.in<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={male_profile} height="300px" />
            <div className="display-3">
              Dr. Anand Sahadevan<br></br>ProfessionalMember
            </div>
            <div>
              Space Applications Centre, ISRO<br></br>
              Ahmedabad Gujarat 380015<br></br>
              Email: toanandss@gmail.com<br></br>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={female_profile} height="300px" />
            <div className="display-3">
              Rimjhim Bhatnagar<br></br>ProfessionalMember
            </div>
            <div>
              Space Applications Centre, ISRO<br></br>
              AHMEDABAD Gujarat 380015<br></br>
              Email: meetrbs@gmail.com<br></br>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Styles>
  );
};
export default FounderMembers;
