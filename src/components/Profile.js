import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Tabs, Tab} from "react-bootstrap";
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
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: orangered;
        background-color: #fff;
            border-color: none;
            }
.nav-tabs {
    border-bottom: none;
    }
.nav-tabs .nav-link:hover{
    color: color:gray
    }
`;
const Profile = (e) => {
  return (
    <Styles>
      <Tabs defaultActiveKey="profile">
        <Tab eventKey="profile" title="Profile">
            <ProfileView></ProfileView>
        </Tab>
        <Tab eventKey="updateprofile" title="Update Profile">
            <UpdateProfile />
        </Tab>
        <Tab eventKey="changepassword" title="Change Password" >
            <PasswordChange></PasswordChange>
        </Tab>
      </Tabs>
    </Styles>
  );
};
export default Profile;
