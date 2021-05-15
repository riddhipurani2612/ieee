import React, { useEffect, useState } from "react";
import FounderMembers from "./FounderMember";
import ProfessionalMembers from "./ProfessionalMember";
import StudentMember from "./StudentMember";
import { Container, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import SignUp from "./SignupForm";
import axios from "axios";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
  }
  .text {
    color: #dbf1fb;
  }
`;

const Members = (props) => {
  let response;
  const [user, setUser] = useState("");
  
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const links = (temp) => {
    if (temp === undefined) {
      return "undefined";
    } else {
      return "http://localhost:5000/" + temp;
    }
  };

  useEffect(async () => {
    try {
      response = await axios.get(`http://localhost:5000/user/getrole`, config);
      console.log(response.data);
      setUser(response.data.role);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          <Tab eventKey="prodessionalmembers" title="Professional">
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
