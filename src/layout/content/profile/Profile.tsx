import React, {FC} from 'react';
import styled from "styled-components";
import MyPosts from "./myPosts/MyPosts";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import {ProfilePageType} from "../../../redux/state";

type ProfilePropsType = {
    postData: ProfilePageType
    addPost: (text: string) => void
}

const Profile: FC<ProfilePropsType> = ({postData, addPost}) => {


    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription/>
            <MyPosts postData={postData.posts} addPost={addPost}/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`