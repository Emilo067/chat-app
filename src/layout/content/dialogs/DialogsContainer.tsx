import React, {FC} from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

type DialogPropsType = {
    // store: any
}

const DialogsContainer: FC<DialogPropsType> = () => {

    // debugger

    // const state = store.getState().dialogsPage;
    //
    // const onSendMessageClick = () => {
    //         store.dispatch(addMessageAC())
    // }
    //
    //    const onNewMessageChange = (newMessage: string) => {
    //         store.dispatch(updateNewMessageTextAC(newMessage))
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;

                const onSendMessageClick = () => {
                    store.dispatch(addMessageAC())
                }

                const onNewMessageChange = (newMessage: string) => {
                    store.dispatch(updateNewMessageTextAC(newMessage))
                }
                return <Dialogs sendMessage={onSendMessageClick}
                                dialogsPage={state}
                                updateNewMessageBody={onNewMessageChange}/>
            }}
        </StoreContext.Consumer>
        )

};

export default DialogsContainer;