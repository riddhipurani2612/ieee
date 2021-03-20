import React,{useEffect, useState} from "react";
import FounderMembers from "./FounderMember";
import ProfessionalMembers from "./ProfessionalMember";
import StudentMember from "./StudentMember";
import { Container, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import DisplayMember from "./DisplayMember";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
}
.text {
  color: #dbf1fb;
}
`;
const Members = () => {
  const [members, setMembers] = useState([]);
  const { first_name,
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
    const role="Student";
    try {
    //  response = await axios.get(`http://localhost:5000/user/${role}`, config);
    response = await axios.get(`http://localhost:5000/user/view`, config);
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
        {members.map((member, index) => (
            <DisplayMember
              name={member.first_name}
            />
          ))}
          <Tabs defaultActiveKey="foundermembers" id="uncontrolled-tab-example">
            <Tab eventKey="foundermembers" title="Founder">
              <FounderMembers />
            </Tab>
            <Tab eventKey="prodessionalmembers" title="Prodessional">
              <ProfessionalMembers />
            </Tab>
            <Tab eventKey="studentmembers" title="Student">
              <StudentMember />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </Styles>
  );
};
export default Members;
