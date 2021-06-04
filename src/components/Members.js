import React, { useEffect, useState } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import MemberView from "../components/MemberView";

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
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user/view`, config);
      setMembers(response.data);
      console.log(response.data);
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
      response = await axios.get(`https://grssprojectserver.herokuapp.com/user/getrole`, config);
      if (response.data.role != "Admin") {
      } else if (response.data.role.includes("Admin")) {
        setAdmin(response.data.role);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteuser = async (temp) => {
  };

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
                    <Col>
                      Name : {memberObj.first_name} {memberObj.last_name}
                      <br></br>
                      Contact : {memberObj.contact}
                      <br></br>
                      Member Id : {memberObj.memberid}
                      <br></br>
                      Email : {memberObj.email}
                      <br></br>
                      Workplace : {memberObj.workplace}
                      <br></br>
                      Grade : {memberObj.designation}
                      <br></br>
                    </Col>
                    <Col>
                      {admin === "Admin" ? (
                        <div>
                          <button
                            className="member-button"
                            onClick={deleteuser(memberObj.email)}
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </div>
                      ) : null}
                    </Col>
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