import React from "react";
import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import shivmohan from "../assets/shivmohan.jpg";

const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
  img {
    float: left;
    margin: 5px;
  }
  .wrap {
    overflow-wrap: break-word;
    spacing: 2rem;
  }
  .custom-text {
    font-size: 140%;
    line-height: 2rem;
  }
`;
const ChairsDesk = () => {
  return (
    <Styles>
        <Container className="main-bg text">
          <div
            className="display-3 text-center"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Chair's Address
          </div>
          <div className="display-5 text-justify col-md-12 my-5">
            <div class="wrap">
              <img
                src={shivmohan}
                style={{ marginRight: "2rem", marginBottom: "2rem" }}
                height="300rem"
              />
            </div>
            <p className="wrap custom-text ">
              Remote sensing of Earth and planetary surface in India was started
              in Ahmedabad more than 40 years back. Space Applications Centre
              and Physical Research laboratory are two main government
              institutes initiating many remote sensing programmes for India.
              Indian satellites payload development, data processing and
              applications for natural resource management had been successfully
              done since late seventies. Physical research laboratory is
              conducting fundamental research in planetary science, earth
              science and atmospheric science. In addition, Academic institutes
              like CEPT University, PDP University (PDPU), Nirma University,
              Indian Institute of Technology etc are conducting advance research
              in earth and planetary science. A number of industries in
              Ahmedabad region are contributing towards commercialization of
              space technology. Thus, Ahmedabad chapter forms a hub of space
              technology involving sensor system, signal processing and
              application of data. All these activities have to be further
              sharpened through interactions with experts at various national
              and international platforms. The IEEE GRSS Gujarat Chapter has a
              unique environment with members as senior researchers, academician
              and a large number of middle level and young researchers.
              Additionally, student’s community of doctoral (PhD), graduates in
              engineering &amp; technology and graduates in science (M Sc
              course) forms a large number of aspirants working in space
              technology. All these activities involving young and senior
              researchers provide a platform to form IEEE-GRSS Gujarat Chapter.
              The Chapter aim towards bringing together the professionals,
              students, researchers, academicians and corporate sector of this
              region on a common platform to exchange and coordinate their
              ideas, and, through collaboration with other Indian and
              International societies and Institutes and to promote professional
              collaboration by focusing the need for science and operational
              applications. Based on these aspects, Ahmedabad IEEE-GRSS Chapter
              is formed to facilitate the promotion &amp; exchange of ideas and
              networking among professionals at regional and international
              level. 
              <ol>
                <br></br>
                <br></br>
                <li>
                  {" "}
                  Bringing the professional, researchers, academicians, students
                  from remote sensing discipline of the region on a common
                  platform under the banner of IEEE GRSS.
                </li>
                <br></br>
                <br></br>
                <li>
                  {" "}
                  Interactions with international experts to propose the new
                  techniques of studies keeping in view of the special needs of
                  the region. Also, how to best use the available resources for
                  a comprehensive study in the area of earth and planetary
                  science study.
                </li>
                <br></br>
                <br></br>
                <li>
                  {" "}
                  Attract more young students/researchers to get involved in the
                  field and IEEE GRSS activities through awareness programs.
                </li>
                <br></br>
                <br></br>
                <li>
                  {" "}
                  Develop special lectures on remote sensing for earth and
                  planetary purpose with case studies from the region.
                </li>
                <br></br>
                <br></br>
                <li>
                  {" "}
                  Involve industry to arrange roundtable for dialogue on remote
                  sensing for earth and planetary science.
                </li>
              </ol>{" "}
              With these aim in mind, IEEE GRSS Gujarat chapter was formed on
              3rd May 2013. The chapter with strength of 26 members distributed
              among various institutes of Gujarat. Members are from Institutes
              like Space Applications Centre/ISRO, Physical Research Laboratory,
              CEPT University, NIRMA University, Gujarat University, M S
              University, St Xavier’s College, M G Science College, Nascent Info
              technology and independent professionals.   Thus, a large number
              of community’s representations make the Chapter most lively in its
              performance.  In a short span of time, Chapter has organized three
              technical lectures from Space Technology experts, One National
              conference and One International Conference. The present
              newsletter is the first of our efforts in popularizing the space
              Science and applications. I congratulate all our members for their
              significant contribution towards excellent activities and growth
              of Chapter.
            </p>
          </div>
        </Container>
    </Styles>
  );
};

export default ChairsDesk;
