import React, { useEffect, useState } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import FeedbackView from "./FeebackView";
const Styles = styled.div``;

const Feedbacks = () => {
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState([]);
  const { name, email, contact, address, subject, message } = formData;
  const history = useHistory();
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const { first_name, last_name, role } = user;

  useEffect(async () => {
    const token = localStorage.getItem("token");
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      if (token === null || token=== undefined) {
        history.goBack();
      }
      let response = await axios.get(
        `https://grssprojectserver.herokuapp.com/user/getrole`,
        config
      );
      if (response.data && response.data.role === "Admin") {
        let response;
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          response = await axios.get(
            "https://grssprojectserver.herokuapp.com/feedback",
            config
          );
          setFormData(response.data);
          if (formData === []) {
            setError(true);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        history.goBack();
      }
    } catch (error) {
      setError(true)
    }
  }, []);
  return (
    <Styles>
      <div className="main-bg">
        <Container>
          <br></br>
          <div className="w3-panel w3-border w3-border-white boxshadow">
            <div className="header-1">Feedbacks</div>
            <div>
              {error ? (
                <div> Data Not Received</div>
              ) : (
                <div>
                  {formData.map((feedbackObj, index) => (
                    <FeedbackView
                      name={feedbackObj.name}
                      email={feedbackObj.email}
                      contact={feedbackObj.contact}
                      address={feedbackObj.address}
                      subject={feedbackObj.subject}
                      message={feedbackObj.message}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </Styles>
  );
};
export default Feedbacks;
