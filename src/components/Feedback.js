import React,{useState} from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
const Feedback = (props) => {
        const [formData, setFormData] = useState({});
      
        const valueChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const { name, email, contact, address, subject, message } = formData;
      
        const submitClicked = (e) => {
          console.log(formData);
        };
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
                        <Form.Control type="text" placeholder="Please Enter your name"
                        name="name" value={name} onChange={valueChange}/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={valueChange}/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.contact">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your contact no" name="contact" value={contact} onChange={valueChange}/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="textarea" rows={3} placeholder="Please Enter your address here" name="address" value={address} onChange={valueChange}/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" name="subject" value={subject} onChange={valueChange}/>
                    </Form.Group>
                    <Form.Group controlID="feedback_form.message">
                        <Form.Label>Feedback Message</Form.Label>
                        <Form.Control type="textarea" row={3} placeholder="Enter your feedback here" name="message" value={message} onChange={valueChange}/>
                    </Form.Group>
                </Form>
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