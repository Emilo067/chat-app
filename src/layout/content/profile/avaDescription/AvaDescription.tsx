import React from 'react';
import styled from "styled-components";
import {ProfileType} from "../../../../redux/profile-reducer";
import avatarka from "../../../../assets/img/avatarkaPost.png";
import check from "../../../../assets/img/check.png";
import cross from "../../../../assets/img/cross.png";
import {Preloader} from "../../../../components/Preloader/Preloader";


type AvaDescriptionPropsType = {
    profile: ProfileType
}

const AvaDescription = ({profile}: AvaDescriptionPropsType) => {

    if(!profile) {
        return <Preloader/>
    }

    return (
        <StyledAvaDescription>
            <img src={profile.photos.large !== null ? profile.photos.large : avatarka} alt={'photo'}/>
            <div>Full name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>Job: {profile.lookingForAJob ? <img src={check} alt={'check'}/> : <img src={cross} alt={'cross'}/>}</div>
        </StyledAvaDescription>
    );
};

export default AvaDescription;

const StyledAvaDescription = styled.div`

`