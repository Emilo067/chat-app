import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {useParams} from "react-router-dom";

type ProfileContainerPropsType = {
    getUserProfile: (userId: number) => void
    profile: ProfileType
}

// class ProfileContainer extends React.Component<ProfileContainerPropsType> {
//
//     componentWillMount() {
//         axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(res => {
//             this.props.setUserProfileAC(res.data)
//         })
//     }
//
//     render() {
//         return <Profile {...this.props}/>
//     }
// }

const ProfileContainer = ({getUserProfile, profile}: ProfileContainerPropsType) => {

    let params = useParams()

    useEffect(() => {
        if(!params.userId) {
          getUserProfile(2)
        } else {
            getUserProfile(+params.userId)
        }
    }, []);

    return <Profile profile={profile}/>
}

type MapStateToPropsType = {
    profile: ProfileType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer)