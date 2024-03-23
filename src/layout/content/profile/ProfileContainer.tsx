import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";

type ProfileContainerPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentWillMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(res => {
            this.props.setUserProfileAC(res.data)
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

type MapStateToPropsType = {
    profile: ProfileType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)