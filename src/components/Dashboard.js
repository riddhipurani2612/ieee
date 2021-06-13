import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import {
  Container,
  Card,
  CardGroup,
  Button,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import "./main.css";
const Styles = styled.div`
  .quarter {
    width: 50%;
    height: 100%;
    float: left;
  }
  .contents {
    height: 50%;
    width: 100%;
  }
`;
const Dashboard = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  let response;
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const [role, setRole] = useState("");
  useEffect(async () => {
    if(token===null){
      history.goBack();
    }
    try {
      response = await axios.get(`http://localhost:5000/user`, config);
      console.log(response.data);
      if (response.data.role != "Admin") {
        history.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Styles>
      <div className="main-bg" style={{backgroundColor : "white"}}>
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="home-intro2">Dashboard</div>
            <br></br>

            <CardGroup>
              <Card style={{backgroundColor : "#971823"}}>
                <center>
                  <br></br>
                  <i class="fa fa-users fa-4x" style={{color: "white"}} aria-hidden="true"></i>
                </center>
                <Card.Body>
                  <Card.Title>
                    <center className="member-dash">Members</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      <Row>
                        <Col>
                          <a href="/members">
                            <Button
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              View Members
                            </Button>
                          </a>
                        </Col>
                        <Col>
                          <a href="/addmember">
                            <Button
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              Add Member
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </center>
                  </Card.Text>
                </Card.Body>
              </Card>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Card style={{backgroundColor:"#1B2876"}}>
                <center>
                  <br></br>
                  <i class="fa fa-book fa-4x" style={{color :"white"}} aria-hidden="true"></i>
                </center>
                <Card.Body>
                  <Card.Title className="material-dash">
                    <center>Material</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      <Row>
                        <Col>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >View
                              Material
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                cursor: "pointer",
                              }}
                            >
                              <Dropdown.Item href="/dlp">DLP</Dropdown.Item>
                              <Dropdown.Item href="/expertlecture">
                                Expert Lecture
                              </Dropdown.Item>
                              <Dropdown.Item href="/publication">
                                Publications
                              </Dropdown.Item>
                              <Dropdown.Item href="/newsletter">
                                Newsletters
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                        <Col>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              Add Material
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                cursor: "pointer",
                              }}
                            >
                              <Dropdown.Item href="/addmaterial">
                                Add Lecture
                              </Dropdown.Item>
                              <Dropdown.Item href="/addnewsletter">
                                Add Newsletters / Publication
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                    </center>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <br></br>
            <CardGroup>
              <Card style={{backgroundColor:"#747C40"}}>
                <center>
                  <br></br>
                  <i class="fa fa-calendar fa-4x" style={{color : "white"}} aria-hidden="true"></i>
                </center>
                <Card.Body>
                  <Card.Title className="event-dash">
                    <center>Events</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      <Row>
                        <Col>
                          <a href="/events">
                            <Button
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              View Events
                            </Button>
                          </a>
                        </Col>
                        <Col>
                          <a href="/addevent">
                            <Button
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              Add Event
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </center>
                  </Card.Text>
                </Card.Body>
              </Card>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Card style={{backgroundColor : "#D94F20"}}>
                <center>
                  <br></br>
                  <i class="fa fa-handshake-o fa-4x" style={{color : "white"}} aria-hidden="true"></i>
                </center>
                <Card.Body>
                  <Card.Title className="meeting-dash">
                    <center>Meetings</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      <Row>
                        <Col>
                          <a href="/viewmeeting">
                            <Button
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              View Meetings
                            </Button>
                          </a>
                        </Col>
                        <Col>
                          <a href="/addmeeting">
                            <Button
                              variant="outline-light"
                              style={{
                                padding: "7px 7px",
                                "font-size": "20px",
                                cursor: "pointer",
                              }}
                            >
                              Add Meeting
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </center>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <br></br>
          </div>
          <br></br>
        </Container>
      </div>
    </Styles>
  );
};
export default Dashboard;
