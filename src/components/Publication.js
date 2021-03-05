import React from "react";
import styled from "styled-components";
import {Container} from 'react-bootstrap';
const Styles = styled.div`
.main-bg {
  background-color: #084C61;
  margin-top: -23px;
}
.text {
  color: #dbf1fb;
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
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36"
              target="blank">
                IEEE Transactions on Geoscience and Remote Sensing
              </a>
            </li>
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8859" target="blank">
                IEEE Geoscience and Remote Sensing Letters
              </a>
            </li>
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4609443" target="blank">
                IEEE Journal of Selected Topics in Applied Earth Observations
                and Remote Sensing
              </a>
            </li>
            <li>
              <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6245518" target="blank">
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
