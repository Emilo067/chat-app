import React from 'react';
import check from "../../../../../../assets/img/check.png";
import cross from "../../../../../../assets/img/cross.png";
import {Contacts} from "../../profileDescription/contacts/contacts";
import {useAppSelector} from "../../../../../../common/hooks/useAppSelector";
import {ProfileType} from "../../../model/profile-reducer";

export const ProfileData = () => {

    const profile = useAppSelector<ProfileType>(state => state.profilePage.profile)
    const myId = useAppSelector<number | null>(state => state.auth.id)

    return (
        <div>
            <div>
                <b>Full name</b>: {profile?.fullName}</div>
            <div>
                <b>About me</b>: {profile?.aboutMe}</div>
            <div>
                <b>Job</b>: {profile?.lookingForAJob ? <img src={check} alt={'check'}/> :
                <img src={cross} alt={'cross'}/>}</div>
            <div>
                <b>My professional skills</b>: {profile?.lookingForAJobDescription}
            </div>
            <div>
                {profile && <Contacts contacts={profile.contacts}/>}
            </div>
        </div>
    );
};
