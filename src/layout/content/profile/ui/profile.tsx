import React from 'react';
import styled from "styled-components";
import AvaDescription from "./ava-description/ava-description";
import MyPostsContainer from "./posts/MyPostsContainer";

const Profile = () => {
    return (
        <StyledProfile>
            <AvaDescription/>
            <MyPostsContainer/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`