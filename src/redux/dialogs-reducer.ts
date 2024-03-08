import {ActionType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsDataType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessageType[]
    newMessageText: string
}

// export type InitialStateType = {
//     dialogs: DialogsDataType[]
//     messages: MessageType[]
//     newMessageText: string
// }

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Ben'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Max'}
    ],
        messages:
    [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m fine'},
        {id: 4, message: 'cool'}
    ],
        newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message:state.newMessageText}],
                newMessageText: ''
            }
        default: return state
    }

    // if (action.type === ADD_MESSAGE) {
    //     state.messages.push({
    //         id: state.messages.length + 1,
    //         message: state.newMessageText
    //     })
    //     state.newMessageText = ''
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //     state.newMessageText = action.newText
    // }
    //
    // return state
}

export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export type AddMessageACType = ReturnType<typeof sendMessageAC>


export const sendMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText} as const
}
