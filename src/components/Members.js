import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .main-bg {
        background: #2e151b;
        height: 100vh;
    }
    .text {
        color: white;
    }
`;
const Members = (props) => {
    return (
        <Styles>
            <div className="main-bg">
                <Container>
                    <div className="display-4 text-center text">
                        Members Data
                    </div>
                </Container>
            </div>
        </Styles>
    );
};

export default Members;
