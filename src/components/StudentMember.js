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
    detailedbio,
  } = members;
  const [userabout, setAbout] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const role = "Student Member";
    try {
      response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getmembers/${role}`,
        config
      );
      if (response.data && response.statusText === "OK") {
        if (response.data.length) {
          setMembers(response.data);
          console.log(response.data);
        }
        if (response.data.about != null) {
          setAbout(true);
        }
      }
    } catch (err) {
      setError(true)
    }
  }, []);

  const links = (temp) => {
    if (temp === undefined) {
      return "https://grssprojectserver.herokuapp.com/profile.png";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };
  const link = (temp) => {
    if (temp === undefined) {
      return "undefined"
    }
    else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  }
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="member-header">Student Members</div>
            <br></br>
            <div>
              {error === true ? (
                <div> Data Not Received</div>
              ) : (
                <Row>
                  {members.map((memberObj, index) => (
                    <Col sm="4">
                      <MemberView
                        first_name={memberObj.first_name}
                        last_name={memberObj.last_name}
                        workplace={memberObj.workplace}
                        contact={memberObj.contact}
                        email={memberObj.email}
                        memberid={memberObj.memberid}
                        designation={memberObj.designation}
                        about={memberObj.about}
                        profile={links(memberObj.profile)}
                        detailedbio={link(memberObj.detailedbio)}
                      ></MemberView>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
            <br></br>
          </div>
        </Container>
        <br></br>
      </div>
    </Styles>
  );

};

export default StudentMember;
