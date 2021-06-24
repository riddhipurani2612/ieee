import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Row, Col, Button, Modal, Alert } from "react-bootstrap";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -48px;
  }
  .text {
    color: #dbf1fb;
  }
`;
const AddDetailedBiography = (props) => {
    const [user, setUser] = useState({});
    const { password, newpassword, confirmnew } = user;

    const [file, setFile] = useState("");
    const [checkFile, setCheckFile] = useState(false);
    const [progress, setProgess] = useState(0);

    const [error, setError] = useState("");
    const [status, setStatus] = useState("");
    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        setProgess(0);
        const file = e.target.files[0]; // accesing file
        if (file != undefined) {
            const extension = file.name.split(".").pop();
            if (
                extension === "pdf"
            ) {
                setFile(file); // storing file
                setCheckFile(true);
                setStatus("");
            } else {
                setStatus("Warning");
                e.target.value = null;
            }
        }
    };
    const addBio = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        let response;
        let config = {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
            },
        };
        let formData = new FormData();
        formData.append("file",file);
        try {
            response = await axios
                .post(
                    `https://grssprojectserver.herokuapp.com/user/addBio`,
                    formData,
                    config
                )
                .catch((err) => {
                    if (err.response) {
                        setStatus("Error");
                        setError(err.response.data.msg);
                        console.log(err.response.data.msg);
                    }
                });
            if (response != undefined && response.data != undefined && response.statusText === "OK") {
                setStatus("Success");
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
                <Modal.Title
                    className="member-header"
                    id="contained-modal-title-vcenter"
                >
                    Add/Update Detailed Biography
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div class="member-form">
                        <Form.Group>
                            <Row>
                                <Col sm="4">
                                    <label>Add/Update Detailed Biopgraphy : </label>
                                </Col>
                                <Col>
                                    <input
                                        type="file"
                                        ref={el}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
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
                                Uploaded file format not supported. Please pdf file!!
                            </Alert>
                        ) : null}

                        <button
                            style={{ float: "right" }}
                            className="member-button"
                            onClick={addBio}
                        >
                            Add
                        </button>
                        <button
                            className="member-button"
                            style={{ float: "right" }}
                            onClick={props.closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};
export default AddDetailedBiography;
