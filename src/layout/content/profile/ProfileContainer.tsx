import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {useParams} from "react-router-dom";

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
        if(!params.userId) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
                setUserProfileAC(res.data)
            })
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`).then(res => {
             setUserProfileAC(res.data)
        })
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