import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, ProfileType, updateStatus} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../../common/hoc/WithAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    getUserProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateStatus: (status: string) => void
    profile: ProfileType
    status: string
    userId: number | null
}

const ProfileContainer = ({getUserProfile, profile, status, getProfileStatus, updateStatus, userId}: ProfileContainerPropsType) => {

    let params = useParams()

    useEffect(() => {
        if (!params.userId) {
            if(userId) {
                getUserProfile(userId)
                getProfileStatus(userId)
            }
        } else {
            getUserProfile(+params.userId)
            getProfileStatus(+params.userId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Profile profile={profile} status={status} updateStatus={updateStatus}/>
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    userId: number | null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        userId: state.auth.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateStatus}),
    WithAuthRedirect
)(ProfileContainer)