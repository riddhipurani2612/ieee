import React,{useEffect, useState} from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
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
`;
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
        `http://localhost:5000/user/getmembers/${role}`,
        config
      );
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
        <div className="display-3 main-bg text">Student Members</div>
        <ListGroup>
          {members.map((memberObj, index) => (
            <ListGroup.Item className="main-bg text">
              <Row className="py-3">
                <Col>
                </Col>
                <Col>
                  <MemberView
                    first_name={memberObj.first_name}
                    last_name={memberObj.last_name}
                    address={memberObj.address}
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

export default StudentMember;
