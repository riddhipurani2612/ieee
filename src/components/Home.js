import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import styled from "styled-components";
import YouTube from "react-youtube";
import Feedback from "react-bootstrap/esm/Feedback";

const Styles = styled.div`
    .main-bg {
        background-color: #2e151b;
    }
    .text {
        color: #dbf1fb;
    }
    .heading {
        font-weight: 500;
    }
    .custom-text {
        font-size: 140%;
        font-family: Helvetica;
    }
    .twitter {
        transition: all 0.2s ease-in-out;
        :hover {
            color: #00acee;
            transform: scale(1.5);
        }
    }
    .facebook {
        transition: all 0.2s ease-in-out;
        :hover {
            color: #3b5998;
            transform: scale(1.5);
        }
    }
    .linkedin {
        transition: all 0.2s ease-in-out;
        :hover {
            color: #0e76a8;
            transform: scale(1.5);
        }
    }
`;

const Home = (props) => {
    const youtubeOptions = {
        width: "100%",
    };

    return (
        <Styles>
            <div className="main-bg">
                <Carousel autoplay="true">
                    <Carousel.Item>
                        <img className="w-100" src={img1}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img2}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img3}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img4}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img5}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img6}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img7}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img8}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img9}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img10}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img11}></img>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <div className="text-center display-2 my-3 text">
                        Welcome To IEEE<br></br>
                        Gujarat Section GRSS Chapter
                    </div>
                    <div className="h4 text-center text my-5">
                        Scroll to explore more<br></br>
                        <i className="fa fa-chevron-down my-5"></i>
                    </div>
                    <div className="display-2 my-5 text-center text">
                        Who are we?
                    </div>

                    <Row className="py-5">
                        <Col>
                            <div className="text-justify text custom-text">
                                The IEEE Geoscience and Remote Sensing Society
                                (GRSS) is a professional society of the IEEE,
                                active in the fields of geoscience and remote
                                sensing. The Geoscience and Remote Sensing
                                Society seeks to advance science and technology
                                in geoscience, remote sensing and related fields
                                using conferences, education, and other
                                resources.The fields of interest of the Society
                                are the theory, concepts, and techniques of
                                science and engineering as they apply to the
                                remote sensing of the earth, oceans, atmosphere,
                                and space, as well as the processing,
                                interpretation and dissemination of this
                                information. Gujarat,one of the most vibrant
                                states of India,houses renowned research and
                                academic institutes which are actively involved
                                in the field of geoscience and remote
                                sensing.This lead to the inception of Gujarat
                                chapter of IEEE GRSS which brings together
                                researchers and academicians under one umbrella
                                where the ideas and vision can be dissipitated
                                in the form of conferences,
                                meetings,lectures,workshops and other activiies.
                            </div>
                        </Col>
                        <Col>
                            <YouTube
                                videoId="JZrCOuquSN0"
                                opts={youtubeOptions}
                            />
                            <br></br>
                            <Row className="my-5">
                                <Col className="text-center">
                                    <a
                                        href="https://www.facebook.com/groups/546023775454229/"
                                        target="blank"
                                    >
                                        <i className="fa fa-5x fa-facebook text facebook"></i>
                                    </a>
                                </Col>
                                <Col className="text-center">
                                    <i className="fa fa-5x fa-linkedin text linkedin"></i>
                                </Col>
                                <Col className="text-center">
                                    <a
                                        href="https://twitter.com/IEEE_GRSS"
                                        target="blank"
                                    >
                                        <i className="fa fa-5x fa-twitter text twitter"></i>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="text-center display-3 my-3 text">
                        FAQs
                    </div>
                    <ul>
                        <div className="text-left display-5 my-2 mx-2 text">
                            <li>Why should I become a IEEE GRSS memeber?</li>
                        </div>
                        <div className="text-left display-6 my-2 mx-2 text">
                            The GRS society is one of 38 societies that belong to the world’s largest professional society, 
                            and that is the IEEE. The vision of the GRS society is to be the leading society in the science, 
                            engineering, application and education of remote sensing. 
                        </div>
                        <div className="text-left display-5 my-2 mx-2 text">
                            <li>Which resources can I have access to ?</li>
                        </div>
                        <div className="text-left display-6 my-2 mx-2 text">
                            You can have online access to our three premier journals: the IEEE Transactions on Geoscience and Remote Sensing (TGRS),
                            IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (J-STARS) and the IEEE Geoscience and
                            Remote Sensing Letters (GRSL). Our Society’s archival publications represent the forefront of remote sensing science,
                            technology and applications. The Transactions are among the premier journals in IEEE as well as remote sensing journals
                            in terms of citation index and impact factor. Members can access the latest issues either on-line or via hard copies in the mail.
                        </div>
                        <div className="text-left display-5 my-2 mx-2 text">
                            <li>What are the technical commitees of IEEE GRSS?</li>
                        </div>
                        <div className="text-left display-6 my-2 mx-2 text">
                            You can participate in our five Technical Committees: Earth Science Informatics (ESI), Image Analysis and Data Fusion (IADF), 
                            Frequency Allocations in Remote Sensing (FARS), Instrumentation and Future Technologies (IFT), and
                            International Spaceborne Imaging Spectroscopy (ISIS). The technical committees work together to 
                            review the state of art of technology in these research areas. The Technical Committees make important 
                            impacts on the future directions of remote sensing technologies. As a GRSS member, you can take a leadership
                            role in this process.
                        </div>
                        <div className="text-left display-5 my-2 mx-2 text">
                            <li>What are the additional benefits?</li>
                        </div>
                        <div className="text-left display-6 my-2 mx-2 text">
                        You can attend IGARSS, our premier conference, at a reduced rate and also participate in the planning of IGARSS. 
                        You can utilize the resources provided by the Society, such as our quarterly Magazine, education programs, 
                        industrial relations and newsletter, on-line lectures and current state-of-the-art information of the IEEE GRSS
                        (www.grss-ieee.org). The Society puts forth a lot of effort in remote sensing education initiatives, development
                        and collection of educational resources for K-12, college/ graduate education as well as continuing education for 
                        professionals. Members can access these resources. We are strengthening our industry relations program. As a member, 
                        you can connect to our industrial partners via this initiative.Other benefits of IEEE GRSS members include subscription
                        to IEEE Spectrum magazine, access to IEEE Xplore data base, IEEE e-mail alias, network with others in the local member
                            community (chapters), career and employment resources, etc.
                        </div>
                        <div className="text-left display-5 my-2 mx-2 text">
                            <li>How do I become a member ?</li>
                        </div>
                        <div className="text-left display-6 my-2 mx-2 text">
                        Follow <a href="https://www.ieee.org/communities/societies/" target="blank" title="IEEE - Learn about IEEE Society Membership">this link </a>to the IEEE Geoscience and Remote Sensing Society Membership page to renew your membership or add 
                        GRSS membership to your existing IEEE membership. Students and affiliate members can use the same link. 
                        </div>
                    </ul>   
                </Container>
                <Feedback></Feedback>
            </div>
        </Styles>
    );
};

export default Home;
