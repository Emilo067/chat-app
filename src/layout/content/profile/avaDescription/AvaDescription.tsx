import React from 'react';
import styled from "styled-components";
import {ProfileType} from "../../../../redux/profile-reducer";
import avatarka from "../../../../assets/img/avatarkaPost.png";
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
            Ava + description
        </StyledAvaDescription>
    );
};

export default AvaDescription;

const StyledAvaDescription = styled.div`

`