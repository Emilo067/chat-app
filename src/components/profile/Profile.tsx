import React from 'react';
import styled from "styled-components";
import MyPosts from "./myPosts/MyPosts";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";

const Profile = () => {
    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription/>
            <MyPosts/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`