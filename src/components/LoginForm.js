import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
    .main-bg {
        background: #2e151b;
        height: 100vh;
    }
    .text {
        color: white;
    }
`;

const Login = (props) => {
    const [formData, setFormData] = useState({});

    const history = useHistory();

    const valueChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const { username, password } = formData;

    const loginClicked = async (e) => {
        e.preventDefault();

        let data = {
            username,
            password,
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let response;
        try {
            response = await axios.post(
                "http://localhost:5000/user/login",
                data,
                config
            );
            console.log(response.data);
            localStorage.setItem("loggedInUserId", response.data._id);
            props.setLogin(true);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Styles>
            <div className="main-bg text">
                <Container>
                    <br></br>
                    <br></br>
                    <div className="display-4 text-center my-5">Login</div>
                    <div>
                        <Form>
                            <Form.Group controlID="login_username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    name="username"
                                    placeholder="Enter UserName"
                                    onChange={valueChange}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlID="login_password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="password"
                                    onChange={valueChange}
                                ></Form.Control>
                            </Form.Group>
                            <Button onClick={loginClicked}>Login</Button>
                        </Form>
                        <div className="text">
                            Do not have account?{" "}
                            <a href="/signup">Click here</a> to join!!
                        </div>
                    </div>
                </Container>
            </div>
        </Styles>
    );
};
export default Login;
