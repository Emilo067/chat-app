import React, {FC, useRef} from 'react';
import styled from "styled-components";
import {DialogsItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {ActionType, DialogsPageType} from "../../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";

type DialogPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: ActionType) => void
}

const Dialogs: FC<DialogPropsType> = ({dialogsData, dispatch}) => {


    const dialogsItems = dialogsData.dialogs.map(d => {
        return <DialogsItem key={d.id} id={d.id} name={d.name}/>
    })


    const messages = dialogsData.messages.map(m => {
        return <Message key={m.id} text={m.text}/>
    })

    const messageElement = useRef<HTMLTextAreaElement>(null)

    const sendMessage = () => {
        if(messageElement.current !== null) {
            dispatch(addMessageAC())
        }
    }

       const onChangeHandler = () => {
        if (messageElement.current) {
            dispatch(updateNewMessageTextAC(messageElement.current.value))
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            sendMessage()
        }
    }

    return (
        <StyledDialogs>
            <StyledDialogsNames>
                {dialogsItems}
            </StyledDialogsNames>
            <StyledMessages>
                {messages}

                <div>
                    <textarea
                        onKeyDown={(e) => onKeyPressHandler(e)} onChange={onChangeHandler} ref={messageElement} value={dialogsData.newMessageText} style={{width: "90%", resize: "none"}}/>
                    <button onClick={sendMessage} style={{display: 'block', float: 'right'}}>Send</button>
                </div>
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
  width: 250px;
    border-right: 1px solid gray;
`



const StyledMessages = styled.div`

`

