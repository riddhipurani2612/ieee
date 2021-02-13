import React from "react";
import { Carousel, Container } from "react-bootstrap";
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
import img11 from "../assets/11.png";
import img12 from "../assets/12.jpg";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background-color: #2f575d;
    }
    .text {
        color: #dbf1fb;
    }
`;

const Home = (props) => {
    return (
        <Styles>
            <div className="main-bg">
                <Carousel>
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
                    <Carousel.Item>
                        <img className="w-100" src={img12}></img>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <div className="my-3 text-center text">
                        The IEEE Geoscience and Remote Sensing Society (GRSS) is
                        a professional society of the IEEE, active in the fields
                        of geoscience and remote sensing. The Geoscience and
                        Remote Sensing Society seeks to advance science and
                        technology in geoscience, remote sensing and related
                        fields using conferences, education, and other
                        resources.The fields of interest of the Society are the
                        theory, concepts, and techniques of science and
                        engineering as they apply to the remote sensing of the
                        earth, oceans, atmosphere, and space, as well as the
                        processing, interpretation and dissemination of this
                        information. Gujarat,one of the most vibrant states of
                        India,houses renowned research and academic institutes
                        which are actively involved in the field of geoscience
                        and remote sensing.This lead to the inception of Gujarat
                        chapter of IEEE GRSS which brings together researchers
                        and academicians under one umbrella where the ideas and
                        vision can be dissipitated in the form of conferences,
                        meetings,lectures,workshops and other activiies.
                    </div>
                </Container>
            </div>
        </Styles>
    );
};

export default Home;
