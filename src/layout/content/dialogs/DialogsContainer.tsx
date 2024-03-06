import React, {FC} from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogPropsType = {
    store: any
}

const DialogsContainer: FC<DialogPropsType> = ({store}) => {

    // debugger

    const state = store.getState().dialogsPage;

    const onSendMessageClick = () => {
            store.dispatch(addMessageAC())
    }

       const onNewMessageChange = (newMessage: string) => {
            store.dispatch(updateNewMessageTextAC(newMessage))
    }

    return <Dialogs sendMessage={onSendMessageClick} dialogsPage={state} updateNewMessageBody={onNewMessageChange}/>
};

export default DialogsContainer;