import React, {FC} from 'react';
import styled from "styled-components";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import MyPostsContainer from "./myPosts/MyPostsContainer";

type ProfilePropsType = {

}

const Profile: FC<ProfilePropsType> = () => {

    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription/>
            <MyPostsContainer/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`