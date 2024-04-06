import React, {FC, useRef} from 'react';
import styled from "styled-components";
import {DialogsItem} from "./dialogsItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../../redux/dialogs-reducer";

type DialogPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (message: string) => void
    sendMessage: ()=>void
    isAuth: boolean
}

const Dialogs: FC<DialogPropsType> = ({dialogsPage, updateNewMessageBody, sendMessage, isAuth}) => {


    const dialogsItems = dialogsPage.dialogs.map(d => {
        return <DialogsItem key={d.id} id={d.id} name={d.name}/>
    })


    const messages = dialogsPage.messages.map(m => {
        return <Message key={m.id} text={m.message}/>
    })

    const messageElement = useRef<HTMLTextAreaElement>(null)

    const onSendMessage = () => {
        if(messageElement.current !== null) {
            sendMessage()
        }
    }

       const onChangeHandler = () => {
        if (messageElement.current) {
            updateNewMessageBody(messageElement.current.value)
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
                        onKeyDown={(e) => onKeyPressHandler(e)} onChange={onChangeHandler} ref={messageElement} value={dialogsPage.newMessageText} style={{width: "90%", resize: "none"}}/>
                    <button onClick={onSendMessage} style={{display: 'block', float: 'right'}}>Send</button>
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

