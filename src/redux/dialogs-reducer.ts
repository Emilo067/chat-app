import {ActionType, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

export const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    if (action.type === ADD_MESSAGE) {
        state.messages.push({
            id: state.messages.length + 1,
            text: state.newMessageText
        })
        state.newMessageText = ''
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText
    }

    return state
}

export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export type AddMessageACType = ReturnType<typeof addMessageAC>


export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText} as const
}
