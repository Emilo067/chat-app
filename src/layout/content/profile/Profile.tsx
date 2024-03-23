import React, {FC} from 'react';
import styled from "styled-components";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../components/Preloader/Preloader";

type ProfilePropsType = {
    profile: ProfileType
}

const Profile: FC<ProfilePropsType> = ({profile}) => {


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