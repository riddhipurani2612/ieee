import React, { useEffect, useState } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import MemberView from "../components/MemberView";
import MembersView from "./MembersView";

const Styles = styled.div``;
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
  useEffect(async () => {
    let response;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/view`,
        config
      );
      if (response.data && response.statusText === "OK") {
        setMembers(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const links = (temp) => {
    if (temp === undefined) {
      return "https://grssprojectserver.herokuapp.com/profile.png";
    } else {
      return "https://grssprojectserver.herokuapp.com/" + temp;
    }
  };
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  let response;
  const [admin, setAdmin] = useState("");

  useEffect(async () => {
    try {
      response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getrole`,
        config
      );
      if (response.data && response.statusText === "OK") {
        if (response.data.role != "Admin") {
        } else if (response.data.role.includes("Admin")) {
          setAdmin(response.data.role);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteuser = async (temp) => {};

  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="member-header">List of Members</div>
            <br></br>
            <div>
              {members.map((memberObj, index) => (
                <>
                  <Row>
                    <MembersView
                      first_name={memberObj.first_name}
                      last_name={memberObj.last_name}
                      memberid={memberObj.memberid}
                      workplace={memberObj.workplace}
                      designation={memberObj.designation}
                      contact={memberObj.contact}
                      email={memberObj.email}
                    ></MembersView>
                  </Row>
                  <hr></hr>
                </>
              ))}
            </div>
            <br></br>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default Members;
