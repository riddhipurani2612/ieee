import React, { useEffect, useState } from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import MemberView from "./MemberView";

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
const FounderMembers = () => {
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
    profile,
  } = members;
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const role = "Founder Member";
    try {
      response = await axios.get(`http://localhost:5000/user/getmembers/${role}`, config);
      setMembers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
      <Styles>
        <div className="main-bg text">
          <Container>
            <div className="display-3 main-bg text">Founder Members</div>
            <ListGroup>
              {members.map((memberObj, index) => (
                <ListGroup.Item className="main-bg text">
                  <Row className="py-3">
                    <Col>
                      <img src={memberObj.profile} alt={profile} height="200rem" width="200rem"></img>
                    </Col>
                    <Col>
                      <MemberView
                        first_name={memberObj.first_name}
                        last_name={memberObj.last_name}
                        workplace={memberObj.workplace}
                        contact={memberObj.contact}
                        email={memberObj.email}
                        about={memberObj.about}
                        ></MemberView>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </div>
      </Styles>
  );
};
export default FounderMembers;
