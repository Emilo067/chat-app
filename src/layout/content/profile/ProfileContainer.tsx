import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {useParams} from "react-router-dom";

type ProfileContainerPropsType = {
    getUserProfile: (userId: number) => void
    profile: ProfileType
    isAuth: boolean
}

const ProfileContainer = ({getUserProfile, profile, isAuth}: ProfileContainerPropsType) => {

    let params = useParams()

    useEffect(() => {
        if(!params.userId) {
          getUserProfile(2)
        } else {
            getUserProfile(+params.userId)
        }
    }, []);

    return <Profile profile={profile} isAuth={isAuth}/>
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer)