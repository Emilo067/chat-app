import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: number
    name: string
}

const DialogsItem: FC<DialogItemPropsType> = (props) => {

    const {id, name} = props;

    return (
        <StyledItem>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </StyledItem>
    )

}

type MessagePropsType = {
    text: string
}

const Message: FC<MessagePropsType> = ({text}) => {
    return (
        <StyledMessage>{text}</StyledMessage>
    )
}

const Dialogs = () => {
    return (
        <StyledDialogs>
            <StyledDialogsNames>
                <DialogsItem id={1} name={'Alex'}/>
                <DialogsItem id={2} name={'Ben'}/>
                <DialogsItem id={3} name={'Igor'}/>
                <DialogsItem id={4} name={'Max'}/>
            </StyledDialogsNames>
            <StyledMessages>
                <Message text={'Hi'}/>
                <Message text={'How are you?'}/>
                <Message text={'I`m fine'}/>
            </StyledMessages>
        </StyledDialogs>
    );
};

export default Dialogs;

const StyledDialogs = styled.div`
  display: grid;

  grid-template-columns: 4fr 10fr;
`

const StyledDialogsNames = styled.div`

`

const StyledItem = styled.div`
  padding-left: 5px;
`

const StyledMessages = styled.div`

`

const StyledMessage = styled.div`

`