import {ActionType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {

    if (action.type === ADD_POST) {
        state.posts.push({post: state.newPostText, likes: 0})
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText} as const
}



