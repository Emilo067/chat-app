const ADD_MESSAGE = 'ADD-MESSAGE'

type ActionType = AddMessageACType

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
}

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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message:action.newMessage}],
            }
        default: return state
    }
}

export type AddMessageACType = ReturnType<typeof sendMessageAC>


export const sendMessageAC = (newMessage: string) => {
    return {type: ADD_MESSAGE, newMessage} as const
}