import React, { useEffect, useState } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import MemberView from "../components/MemberView";

const Styles = styled.div``;
const StudentMember = () => {
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
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const role = "Student";
    try {
      response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getmembers/${role}`,
        config
      );
      setMembers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };

  return (
    <Styles>
      <div className="main-bg">

        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="member-header">Student Members</div>
            <br></br>
            <div>
              <Row>
                {members.map((memberObj, index) => (
                  <Col sm="4">
                    <MemberView
                      first_name={memberObj.first_name}
                      last_name={memberObj.last_name}
                      workplace={memberObj.workplace}
                      contact={memberObj.contact}
                      email={memberObj.email}
                      about={memberObj.about}
                      profile={links(memberObj.profile)}
                      index={index}
                    ></MemberView>
                  </Col>
                ))}
              </Row>
            </div>
            <br></br>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};

export default StudentMember;
