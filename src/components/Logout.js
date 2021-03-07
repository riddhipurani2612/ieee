import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Styles = styled.div`
.main-bg {
    background-color: #084C61;
    margin-top: -23px;
    height : 500px;
  }
  .text {
    color: #dbf1fb;
  }
`;

const Logout = () => {
    return(
        <Styles>
            {console.log("Log out")}
            <div className="main-bg">
                {localStorage.clear()}
            </div>
        </Styles>
    );
};
export default Logout;