import React, {FC} from 'react';
import styled from "styled-components";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import MyPostsContainer from "./myPosts/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

const Profile: FC<ProfilePropsType> = ({store}) => {

    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription/>
            <MyPostsContainer store={store}/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`