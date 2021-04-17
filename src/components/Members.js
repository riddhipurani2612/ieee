import React, { useEffect, useState } from "react";
import FounderMembers from "./FounderMember";
import ProfessionalMembers from "./ProfessionalMember";
import StudentMember from "./StudentMember";
import { Container, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
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
  return (
    <Styles>
        <Container>
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
    </Styles>
  );
};
export default Members;
