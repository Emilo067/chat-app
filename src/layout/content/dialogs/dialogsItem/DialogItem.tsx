import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Avatar} from "../../../../components/avatar/Avatar";
import ava from '../../../../assets/img/avatarkaPost.png'

export type DialogItem = {
    id: number
    name: string
}


export const DialogsItem: FC<DialogItem> = (props) => {

    const {id, name} = props;

    return (
        <StyledItem>
            <Avatar img={ava}/>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </StyledItem>
    )

}


const StyledItem = styled.div`
  padding-left: 5px;
`