import {ActionType, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Ben'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Max'}
    ],
        messages:
    [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'I`m fine'},
        {id: 4, text: 'cool'}
    ],
        newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
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
