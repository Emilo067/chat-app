import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {useParams} from "react-router-dom";
import {profileApi} from "../../../api/api";

type ProfileContainerPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
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

const ProfileContainer = ({setUserProfileAC, profile}: ProfileContainerPropsType) => {

    let params = useParams()

    useEffect(() => {
        debugger
        if(!params.userId) {
            profileApi.getProfile('2').then(res => {
                setUserProfileAC(res.data)
            })
        } else {
            profileApi.getProfile(params.userId).then(res => {
                setUserProfileAC(res.data)
            })
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

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)