import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {
    getProfileStatus,
    getUserProfile,
    ProfileType,
    ProfileUpdateStatus,
    updatePhoto,
    updateProfile
} from "../../model/profile-reducer";
import avatarka from "../../../../../assets/img/avatarkaPost.png";
import {Preloader} from "../../../../../common/components/Preloader/Preloader";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector";
import {ProfileStatus} from "../profile-status/ProfileStatusFC";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {ProfileData} from "../profile/profileData/ProfileData";
import ProfileDataReduxForm, {FormProfileData} from "../profile/profileSetDataForm/ProfileSetDataForm";


const ProfileDescription = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector<ProfileType>(state => state.profilePage.profile)
    const status = useAppSelector<string>(state => state.profilePage.status)
    const myId = useAppSelector<number | null>(state => state.auth.id)
    const profileUpdateStatus = useAppSelector<ProfileUpdateStatus>(state => state.profilePage.profileUpdateStatus)
    const params = useParams()

    const isOwner = !params.userId && myId

    const [editMode, setEditMode] = useState(false)

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

    const onClickHandler = () => {
        setEditMode(true);
    }

    const onSubmit = (formData: FormProfileData) => {
        dispatch(updateProfile(formData))
        if(profileUpdateStatus === 'success') {
            setEditMode(false)
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

            {isOwner && !editMode && <div>
                <button onClick={onClickHandler}>Edit</button>
            </div>}

            {editMode ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit}/> : <ProfileData/>}

        </StyledAvaDescription>
    );
};

export default ProfileDescription;

const StyledAvaDescription = styled.div`

`

