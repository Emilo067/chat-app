import {usersApi} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

type ActionType = AddPostACType | UpdateNewPostTextACType | SetUserProfileACType

export type PostType = {
    post: string,
    likes: number
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        small: null | string,
        large: null | string
    }
} | null

export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    newPostText: string
}

// export type InitialStateType = {
//     posts: PostType[],
//     newPostText: string
// }

const initialState: ProfilePageType = {
    posts: [
        {post: "This is my post", likes: 20},
        {post: "This is my post", likes: 33},
        {post: "This is my post", likes: 4}
    ],
    profile: null,
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {post: state.newPostText, likes: 0}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>

export const addPostAC = () => {
    return {type: ADD_POST} as const
}

 const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText} as const
}


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersApi.getProfile(userId).then(res => {
        dispatch(setUserProfileAC(res.data))
    })
}



