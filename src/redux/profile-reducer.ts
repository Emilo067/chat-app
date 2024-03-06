import {ActionType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState: ProfilePageType = {
        posts: [
            {post: "This is my post", likes: 20},
            {post: "This is my post", likes: 33},
            {post: "This is my post", likes: 4}
        ],
        newPostText: 'IT-INCUBATOR'
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

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



