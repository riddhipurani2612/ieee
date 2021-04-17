import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Tabs, Tab, Container } from "react-bootstrap";
import UpdateProfile from "./UpdateProfile.js";
import ProfileView from "./ProfileView.js";
import PasswordChange from "./PasswordChange.js";
const Styles = styled.div`
  .main-bg {
    background-color: #084c61;
    margin-top: -48px;
  }
  .text {
    color: #dbf1fb;
  }
`;
const Profile = (e) => {
  return (
    <Styles>
      <Container>
        <Tabs defaultActiveKey="profile">
          <Tab eventKey="profile" title="Profile">
            <ProfileView></ProfileView>
          </Tab>
          <Tab eventKey="updateprofile" title="Update Profile">
            <UpdateProfile />
          </Tab>
          <Tab eventKey="changepassword" title="Change Password">
            <PasswordChange></PasswordChange>
          </Tab>
        </Tabs>
      </Container>
    </Styles>
  );
};
export default Profile;
