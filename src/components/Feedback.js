import React from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
const Feedback = (props) => {
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlID="feedback_form.name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Please Enter your name"/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.contact">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="number" placeholder="Please enter your contact no"/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="textarea" rows={3} placeholder="Please Enter your address here"/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject"/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.message">
                        <Form.Label>Feedback Message</Form.Label>
                        <Form.Control type="textarea" row={3} placeholder="Enter your feedback here"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModal}>
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