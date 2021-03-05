import React from "react";
import FounderMembers from "./FounderMember";
import ProfessionalMembers from "./ProfessionalMember";
import StudentMember from "./StudentMember";
import { Container, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
  margin-top: -23px;
}
.text {
  color: #dbf1fb;
}
`;
const Members = () => {
  return (
    <Styles>
      <div className="main-bg text">
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
      </div>
    </Styles>
  );
};
export default Members;
