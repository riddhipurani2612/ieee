import React from "react";
import styled from "styled-components";
import {Container} from 'react-bootstrap';
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text {
    color: white;
    line-height : 50px;
}
`;
const Publication = () => {
  return (
    <Styles>
      <Container>
        <div className="main-bg text">
        <div className="display-3 text-center">Publications</div>
          <ul className="display-5 mx-5 my-5">
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36">
                IEEE Transactions on Geoscience and Remote Sensing
              </a>
            </li>
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8859">
                IEEE Geoscience and Remote Sensing Letters
              </a>
            </li>
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4609443">
                IEEE Journal of Selected Topics in Applied Earth Observations
                and Remote Sensing
              </a>
            </li>
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6245518">
                IEEE Geoscience and Remote Sensing Magazine
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Styles>
  );
};
export default Publication;
