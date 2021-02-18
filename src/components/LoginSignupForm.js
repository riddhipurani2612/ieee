import React from 'react';
import {Button, Container, Form} from "react-bootstrap"; 
import styled from "styled-components";
const Styles = styled.div`
    .main-bg {
        background: #2e151b;
        height: 100vh;
    }
    .text {
        color: white;
    }
    .split{
        height : 100%;
        width : 50%;
        position : absolute;
    }
    .left{
        left : 0;
    }
    .right{
        right : 0;
    }
    hr{
        border : none;
        border-left : 1px solid white;
        width : 1px;
        height : 100px;
    }
`;

const LoginSignup = () =>{
    return(
        <Styles>
            <div className="main-bg">
                <Container>
                    <div className="display-6 text-center text">
                        <div className="split left">
                            <div>
                                SignUp
                            </div>
                        </div>
                        <div className="split right">
                            <div>
                            <Form>
                                    <Form.Group controlID="login_username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter UserName"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlID="login_password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="password"></Form.Control>
                                    </Form.Group>
                                    <Button >Login</Button>
                                </Form>
                            </div>
                        </div> 
                    </div>
                </Container>
            </div>
        </Styles>
    );
}
export default LoginSignup;