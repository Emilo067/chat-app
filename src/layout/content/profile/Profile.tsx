import React, {FC} from 'react';
import styled from "styled-components";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";
import {Navigate} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType
    isAuth: boolean
}

const Profile: FC<ProfilePropsType> = ({profile, isAuth}) => {

    if(!isAuth) {
        return <Navigate to={"/login"}/>
    }

    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription profile={profile}/>
            <MyPostsContainer/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`