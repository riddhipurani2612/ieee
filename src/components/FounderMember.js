import React from "react";
import { CardColumns, Card } from "react-bootstrap";
import styled from "styled-components";
import shivmohan from '../assets/shivmohan.jpg';
import aishwarya from '../assets/aishwarya.jpg';
import anjana from '../assets/anjana.jpg';
import anup from '../assets/anup.jpg';
import parul from '../assets/parul.jpg';
import sandhya from '../assets/sandhya.jpg';
import nirzar from '../assets/nirzar.jpg';
import nilima from '../assets/nilima.jpg';
import saroj from '../assets/saroj.jpg';
import suchit from '../assets/suchit.jpeg';
import anupam from '../assets/anupam.jpg';
import dharmendra from '../assets/dharmendra.jpg';
import sriram from '../assets/sriram.jpg';
import pravin from '../assets/pravin.jpg';
import ahire from '../assets/ahire.jpg';
import panjabrao from '../assets/panjabrao.png';

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
          <Card className="padding">
            <Card.Img variant="top" src={shivmohan} height="300px" />
            <Card.Body>
              <Card.Title>Dr. Shiv Mohan</Card.Title>
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
          <Card className="padding">
            <Card.Img variant="top" src={aishwarya} height="300px"/>
            <Card.Body>
              <Card.Title>Dr Aishwarya Narain</Card.Title>
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
          <Card className="padding p-3">
            <Card.Img variant="top" src={anjana} height="300px" />
            <Card.Body>
              <Card.Title>Dr. Anjana Vyas</Card.Title>
              <Card.Text>
                Professor, Faculty of Planning and Public Policy &amp; <br></br>
                Programme Coordinator (Geomatics), Faculty of Technology
                <br></br>
                CEPT University, K L Campus, Navrangpura,<br></br>
                Ahmedabad- 380009 Gujarat<br></br>
                Phone: (O) +91-79-26302470/ 26302740 (Extn. 298) <br></br>
                Fax: 079-26302075 (O); Mobile: +91-9825522844<br></br>
                Email: anjanavyas@cept.ac.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
            <Card.Img variant="top" src={anup} height="300px" />
            <Card.Body>
              <Card.Title>Dr. Anup Kumar Das</Card.Title>
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
          <Card className="padding">
            <Card.Img variant="top" src={parul} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. Parul Patel</Card.Title>
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
          <Card className="padding p-3">
            <Card.Img variant="top" src={sandhya} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. G. Sandhya Kiran</Card.Title>
              <Card.Text>
                Professor<br></br>
                Eco-Physiology and Remote-Sensing Laboratory,<br></br>
                Department of Botany,<br></br>
                M.S. University of Baroda,<br></br>
                Vadodara, 390 002, Gujarat<br></br>
                Ph: +91-265-2434583 ;<br></br>
                Mobile:+91-9879048141<br></br>
                Email: sandhyakiran60@yahoo.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding p-3">
            <Card.Img variant="top" src={nirzar} height="300px"/>
            <Card.Body>
              <Card.Title>Nirzar Lakhia</Card.Title>
              <Card.Text>
                Director<br></br>
                Indian Geomatics Research Institute (IGRI)<br></br>
                A/1 Sona Duplex,<br></br>
                190 Nehru park Society,<br></br>
                Vastrapur, Ahmedabad – 380015<br></br>
                (M) – 9825647127; 8490849095/96<br></br>
                Email: nirzarlakhia@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
            <Card.Img variant="top" src={nilima} height="300px" />
            <Card.Body>
              <Card.Title>Nilima Rani Chaube</Card.Title>
              <Card.Text>
                Scientist / Engineer,<br></br>
                Space Applications Centre (ISRO),<br></br>
                Dept. of Space, Govt. Of India,<br></br>
                Ahmedabad-380015, Gujarat<br></br>
                Ph: +91-79-2691 4039 (O)<br></br>
                Email:chaube@sac.isro.gov.in, neelimachaube@yahoo.co.in<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
            <Card.Img variant="top" src={saroj} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. Saroj Maity</Card.Title>
              <Card.Text>
                Scientist/Engineer Space Applications Centre Department of
                Space,<br></br>
                Govt. of India<br></br>
                Ahmedabad -380015 (Gujarat)<br></br>
                Ph: +91-79-2691 4035 (O);<br></br>
                Mobile: +91-9924310223<br></br>
                Email:maitys@sac.isro.gov.in; smaity00@yahoo.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
            <Card.Img variant="top" src={suchit} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. Suchit Purohit</Card.Title>
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
          <Card className="padding">
          <Card.Img variant="top" src={anupam} height="300px" />
            <Card.Body>
              <Card.Title>Prof. Dr-Ing. Anupam K. Singh</Card.Title>
              <Card.Text>
                Professor<br></br>
                Water Engineering &amp; Head, Department of Civil Engineering{" "}
                <br></br>
                PDP University Gandhinagar-382 007 <br></br>
                Ph: +91-79-2327 5421 (O); +91-79-4005 6928 (R) <br></br>
                Email: anupam.singh@gmx.net<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
          <Card.Img variant="top" src={dharmendra} height="300px" />
            <Card.Body>
              <Card.Title>Dr. Dharmendra G. Trivedi</Card.Title>
              <Card.Text>
                Associate Professor, <br></br>
                St. Xavier`s College, <br></br>
                Gujarat University 38009 (Gujarat), India<br></br>
                Ph: +91-79-26308057(O); Mobile: 0-9426384201<br></br>
                Email: dgtrivedi60@rediffmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
          <Card.Img variant="top" src={sriram} height="300px"/>
            <Card.Body>
              <Card.Title>Sriram Saran</Card.Title>
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
          <Card className="padding">
          <Card.Img variant="top" src={pravin} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. Pravin Chaudhari</Card.Title>
              <Card.Text>
                Associate Professor <br></br>
                Department of Electronics<br></br>
                Zulal Bhilajirao Patil College,<br></br>
                Dhule-424002, Maharashtra, India<br></br>
                Ph: +91-02562-222343 (extn. 34); Mobile: +91-9422757654<br></br>
                Email: prc_61@rediffmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
          <Card.Img variant="top" src={ahire} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. D.V. Ahire</Card.Title>
              <Card.Text>
                Associate Professor and Head,<br></br>
                Department of Physics, JET’s Z.B. Patil College,<br></br>
                Dhule-424002, Maharashtra, India<br></br>
                Ph: +91-2562-221310; Mobile: +91-9423979468<br></br>
                Email: dvahire@rediffmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="padding">
          <Card.Img variant="top" src={panjabrao} height="300px"/>
            <Card.Body>
              <Card.Title>Dr. Panjabrao Pawar</Card.Title>
              <Card.Text>
                Principal <br></br>
                Department of Electronics<br></br>
                Zulal Bhilajirao Patil College,<br></br>
                Dhule-424002, Maharashtra, India<br></br>
                Ph: +91-02562-222343 (extn. 34); Mobile: +91-9423193364<br></br>
                Email: phpawar31@gmail.com<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </Styles>
  );
};
export default FounderMembers;
