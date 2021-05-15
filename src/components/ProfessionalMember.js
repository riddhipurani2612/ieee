import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import MemberView from "../components/MemberView";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
  .padding {
    margin: 15px;
  }
`;
const ProfessionalMembers = () => {
  const [members, setMembers] = useState([]);
  const {
    first_name,
    last_name,
    role,
    address,
    contact,
    email,
    workplace,
    designation,
    about,
  } = members;
  const [userabout, setAbout] = useState(false);
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const role = "Professional Member";
    try {
      response = await axios.get(
        `http://localhost:5000/user/getmembers/${role}`,
        config
      );
      setMembers(response.data);
      if (response.data.about != null) {
        setAbout(true);
        console.log(`About ${about}`);
      } else {
        console.log(`About null`);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "http://localhost:5000/" + temp;
    }
  };

  return (
    <Styles>
      <Container className="main-bg text">
        <Row className="py-3">
          {members.map((memberObj, index) => (
            <MemberView
              first_name={memberObj.first_name}
              last_name={memberObj.last_name}
              workplace={memberObj.workplace}
              contact={memberObj.contact}
              email={memberObj.email}
              about={memberObj.about}
              profile={links(memberObj.profile)}
            ></MemberView>
          ))}
        </Row>
      </Container>
    </Styles>
  );
};
export default ProfessionalMembers;
