import React, {FC} from 'react';
import styled from "styled-components";
import MyPosts from "./myPosts/MyPosts";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import {ProfilePageType} from "../../../redux/state";

type ProfilePropsType = {
    postData: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const Profile: FC<ProfilePropsType> = ({postData, addPost, updateNewPostText}) => {


    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription/>
            <MyPosts updateNewPostText={updateNewPostText} postData={postData} addPost={addPost}/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`