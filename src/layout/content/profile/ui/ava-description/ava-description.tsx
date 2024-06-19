import React, {ChangeEvent, useEffect} from 'react';
import styled from "styled-components";
import {getProfileStatus, getUserProfile, ProfileType, updatePhoto} from "../../model/profile-reducer";
import avatarka from "../../../../../assets/img/avatarkaPost.png";
import check from "../../../../../assets/img/check.png";
import cross from "../../../../../assets/img/cross.png";
import {Preloader} from "../../../../../common/components/Preloader/Preloader";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector";
import {ProfileStatus} from "../profile-status/ProfileStatusFC";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {useParams} from "react-router-dom";


const AvaDescription = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector<ProfileType>(state => state.profilePage.profile)
    const status = useAppSelector<string>(state => state.profilePage.status)
    const myId = useAppSelector<number | null>(state => state.auth.id)
    const params = useParams()
    console.log(params.userId)
    useEffect(() => {
        if (params.userId) {
            dispatch(getUserProfile(+params.userId))
            dispatch(getProfileStatus(+params.userId))
        } else {
            if (myId) {
                dispatch(getUserProfile(myId))
                dispatch(getProfileStatus(myId))
            } else {

            }
        }
    }, [params.userId, dispatch, myId]);


    const selectPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.currentTarget.files?.length) {
                dispatch(updatePhoto(e.currentTarget.files[0]))
            }
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <StyledAvaDescription>
            <img src={profile.photos.large !== null ? profile.photos.large : avatarka} alt={'userPhoto'}/>
            {!params.userId && <input type={'file'} onChange={selectPhotoHandler}/>}
            {!params.userId ? <ProfileStatus/> : <div>{status}</div>}
            <div>Full name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>Job: {profile.lookingForAJob ? <img src={check} alt={'check'}/> :
                <img src={cross} alt={'cross'}/>}</div>
        </StyledAvaDescription>
    );
};

export default AvaDescription;

const StyledAvaDescription = styled.div`

`