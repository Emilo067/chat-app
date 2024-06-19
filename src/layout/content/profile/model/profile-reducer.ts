import {profileApi, usersApi} from "../../../../api/api";
import {Dispatch} from "redux";
import {ResultCode} from "../../../../common/enums/enums";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const SET_PROFILE_PHOTO = 'SET-PROFILE-PHOTO'

type ActionType =
    AddPostACType
    | SetUserProfileACType
    | SetProfileStatusACType
    | SetProfilePhotoACType


export type PostType = {
    post: string,
    likes: number
}

export type ProfileType = {
    aboutMe: string | null,
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
        small: string,
        large: string
    }
} | null

export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType
    status: string
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
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {post: action.newPost, likes: 0}],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PROFILE_PHOTO:
            debugger
            if (state.profile) {
                return {
                    ...state,
                    profile: { ...state.profile, photos: action.photos }
                };
            }
            return state;
        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type SetProfileStatusACType = ReturnType<typeof setProfileStatus>
export type SetProfilePhotoACType = ReturnType<typeof setProfilePhoto>

export const addPostAC = (newPost: string) => {
    return {type: ADD_POST, newPost} as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setProfileStatus = (status: string) => ({type: SET_PROFILE_STATUS, status} as const)
export const setProfilePhoto = (photos: any) => ({type: SET_PROFILE_PHOTO, photos} as const)


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersApi.getProfile(userId).then(res => {
        dispatch(setUserProfileAC(res.data))
    })
}


export const getProfileStatus = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId).then(res => {
        dispatch(setProfileStatus(res.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status).then(res => {
        if (res.data.resultCode === ResultCode.success) {
            dispatch(setProfileStatus(status))
        } else {
            console.warn("ERROR UPDATE STATUS")
        }
    })
}

export const updatePhoto = (file: any) => (dispatch: Dispatch) => {
    profileApi.updatePhoto(file).then(res => {
        if (res.data.resultCode === ResultCode.success) {
            debugger
            dispatch(setProfilePhoto(res.data.data.photos))
        } else {
            console.warn("ERROR UPDATE PHOTO")
        }
    })
}