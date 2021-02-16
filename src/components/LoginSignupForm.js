import React from 'react';
import {Container, Row, Col} from "react-bootstrap"; 
const LoginSignup = () =>{
    return(
        <>
            <Container>
                <Row>
                    <Col xs={5} className="mt-4">
                        Login
                    </Col>
                    <Col xs={5} className="mt-4">
                        Sign Up
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default LoginSignup;