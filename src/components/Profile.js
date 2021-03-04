import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form } from "react-bootstrap";

const Styles = styled.div`
    .main-bg {
        background: #2e151b;
    }
    .text {
        color: white;
    }
`;
const Profile = (e) => {
    useEffect(async () => {
        const id = localStorage.getItem("loggedInUserId");
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log(config);
        let response;
        try {
            response = await axios.get(
                `http://localhost:5000/user/${id}`,
                config
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <Styles>
            <div className="main-bg text">
                <Form>
                    <Form.Group controlID="login_email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="col-xs-4"
                            type="text"
                            value=""
                            name="email"
                            disabled
                        ></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </Styles>
    );
};

export default Profile;
