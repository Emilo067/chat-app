import {profileApi, usersApi} from "../../../../api/api";
import {Dispatch} from "redux";
import {ResultCode} from "../../../../common/enums/enums";
import {FormProfileData} from "../ui/profile/profileSetDataForm/ProfileSetDataForm";
import {AppStateType} from "../../../../app/store/store-redux";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const SET_PROFILE_PHOTO = 'SET-PROFILE-PHOTO'
const SET_PROFILE_UPDATE_STATUS = 'SET-PROFILE-UPDATE-STATUS'

type ActionType =
    AddPostACType
    | SetUserProfileACType
    | SetProfileStatusACType
    | SetProfilePhotoACType
    | SetProfileUpdateStatusACType


export type Post = {
    post: string,
    likes: number
}

export type ProfileUpdateStatus = 'none' | 'success' | 'error'

export type ContactsType = {
    "facebook": string,
    "website": string,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": string,
    "github": string,
    "mainLink": string
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
} | null

export type ProfilePageType = {
    posts: Post[]
    profile: ProfileType
    status: string
    profileUpdateStatus: ProfileUpdateStatus
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
    profileUpdateStatus: 'none',
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
            if (state.profile) {
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos}
                };
            }
            return state
        case SET_PROFILE_UPDATE_STATUS:
            return {
                ...state,
                profileUpdateStatus: action.status
            }
        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type SetProfileStatusACType = ReturnType<typeof setProfileStatus>
export type SetProfilePhotoACType = ReturnType<typeof setProfilePhoto>
export type SetProfileUpdateStatusACType = ReturnType<typeof setProfileUpdateStatus>

export const addPostAC = (newPost: string) => {
    return {type: ADD_POST, newPost} as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setProfileStatus = (status: string) => ({type: SET_PROFILE_STATUS, status} as const)
export const setProfilePhoto = (photos: any) => ({type: SET_PROFILE_PHOTO, photos} as const)
export const setProfileUpdateStatus = (status: ProfileUpdateStatus) => ({
    type: SET_PROFILE_UPDATE_STATUS,
    status
} as const)


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

export const updateProfile = (profile: FormProfileData) => (dispatch: Dispatch<any>, getState: () => AppStateType) => {
    const userId = getState().auth.id
    profileApi.updateProfile(profile).then(res => {
        if (res.data.resultCode === ResultCode.success) {
            dispatch(setProfileUpdateStatus('success'))
            if (userId) {
                dispatch(getUserProfile(+userId))
            }
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
            dispatch(setProfileUpdateStatus('error'))
            dispatch(stopSubmit('edit-profile', {_error: message}))
            //dispatch(stopSubmit('edit-profile', {'contacts': {'facebook': message}}))
        }
    })
}
