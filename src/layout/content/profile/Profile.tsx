import React, {FC} from 'react';
import styled from "styled-components";
import MyPosts from "./myPosts/MyPosts";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import {ActionType, ProfilePageType} from "../../../redux/state";

type ProfilePropsType = {
    postData: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile: FC<ProfilePropsType> = ({postData, dispatch}) => {


    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription/>
            <MyPosts dispatch={dispatch} postData={postData}/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`