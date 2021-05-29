import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import AboutView from "../components/AboutView";
import "animate.css/animate.min.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./main.css";
const Styles = styled.div``;
const MemberView = (props) => {
  const [viewReadMode, setViewReadMore] = useState(false);
  let name = props.first_name + " " + props.last_name;
  const [admin, setAdmin] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  let response;
  useEffect(async () => {
    if (props.about != null) {
      setViewReadMore(true);
      try {
        response = await axios.get(
          `https://grssprojectserver.herokuapp.com/user/getrole`,
          config
        );
        console.log(response.data);
        if (response.data.role != "Admin") {
        } else if (response.data.role.includes("Admin")) {
          setAdmin(response.data.role);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  const updateuser = async () => {
    localStorage.setItem("userEmailUpdate", props.email);
    history.push("/profile");
  };
  const deleteuser = async () => {
    console.log("Delete");
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = axios.delete(
        `https://grssprojectserver.herokuapp.com/user/${props.email}`,
        config
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const [showModal, setModal] = useState(false);
  return (
    <Styles>
      <div>
        <AboutView
          show={showModal}
          closeModal={() => setModal(false)}
          onHide={() => setModal(false)}
          name={name}
          about={props.about}
        ></AboutView>
        <Card key={props.index} className="main-bg">
          <Card.Img variant="top" src={props.profile} />
          <Card.Body className="member-content">
            <Card.Title>
              {props.first_name} {props.last_name}
            </Card.Title>
            <Card.Text>
              {props.designation} <br></br>
              {props.workplace}
              <br></br>
              {props.contact} <br></br>
              {props.email}
              <br></br>
              <Row>
                <Col sm="3">
                  {viewReadMode && (
                    <button
                      className="member-button"
                      onClick={() => setModal(true)}
                    >
                      Know More
                    </button>
                  )}
                </Col>
                <Col sm="2">
                  {admin === "Admin" ? (
                    <div>
                      <button className="member-button" onClick={deleteuser}>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col>
                  {admin === "Admin" ? (
                    <div>
                      <button onClick={updateuser} className="member-button">
                        <i class="fa fa-edit" aria-hidden="true"></i>
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Styles>
  );
};
export default MemberView;
