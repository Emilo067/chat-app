import React from 'react';
import styled from "styled-components";
import ProfileDescription from "../profileDescription/ProfileDescription";
import MyPostsContainer from "../posts/MyPostsContainer";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector";
import {Navigate} from "react-router-dom";

const Profile = () => {

    const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)

    if(!isAuth) {
       return <Navigate to='/login'/>
    }

    return (
        <StyledProfile>
            <ProfileDescription/>
            <MyPostsContainer/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`
  
`
