import React, { useEffect, useState } from "react";
import FounderMembers from "./FounderMember";
import ProfessionalMembers from "./ProfessionalMember";
import StudentMember from "./StudentMember";
import { Container, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import "./main.css";
const Styles = styled.div``;

const Members = (props) => {
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <Tabs
            defaultActiveKey="foundermembers"
            id="uncontrolled-tab-example"
            className="tabClass"
          >
            <Tab eventKey="foundermembers" title="Founder">
              <FounderMembers />
            </Tab>
            <Tab eventKey="prodessionalmembers" title="Professional">
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
