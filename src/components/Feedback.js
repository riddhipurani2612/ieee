import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
const Feedback = (props) => {
  const [formData, setFormData] = useState({});

  const valueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, email, contact, address, subject, message } = formData;
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const submitClicked = async (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      contact,
      address,
      subject,
      message,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response;
    try {
      response = await axios.post(
        "https://grssprojectserver.herokuapp.com/feedback",
        data,
        config
      );
      if (response.statusText === "OK") {
        setStatus("Success");
      } else {
        setStatus("Warning");
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlID="feedback_form.name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter your name"
              name="name"
              value={name}
              onChange={valueChange}
            />
          </Form.Group>
          <Form.Group controlID="feedback_form.email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={email}
              onChange={valueChange}
            />
          </Form.Group>
          <Form.Group controlID="feedback_form.contact">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your contact no"
              name="contact"
              value={contact}
              onChange={valueChange}
            />
          </Form.Group>
          <Form.Group controlID="feedback_form.address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="textarea"
              rows={3}
              placeholder="Please Enter your address here"
              name="address"
              value={address}
              onChange={valueChange}
            />
          </Form.Group>
          <Form.Group controlID="feedback_form.subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter subject"
              name="subject"
              value={subject}
              onChange={valueChange}
            />
          </Form.Group>
          <Form.Group controlID="feedback_form.message">
            <Form.Label>Feedback Message</Form.Label>
            <Form.Control
              type="textarea"
              row={3}
              placeholder="Enter your feedback here"
              name="message"
              value={message}
              onChange={valueChange}
            />
          </Form.Group>
        </Form>
        {status === "Success" ? (
          <Alert variant="success">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
            Data Uploaded Successfully!!
          </Alert>
        ) : null}
        {status === "Error" ? (
          <Alert variant="danger">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            {error}
          </Alert>
        ) : null}
        {status === "Warning" ? (
          <Alert variant="warning">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            Uploaded file format not supported. Please upload only image file
          </Alert>
        ) : null}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={submitClicked}>
          Submit Feedback
        </Button>
        <Button variant="primary" onClick={props.closeModal}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Feedback;
