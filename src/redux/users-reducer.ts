import {Dispatch} from "redux";
import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOW_IN_PROGRESS = 'SET-FOLLOW-IN-PROGRESS'

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageAC
    | SetTotalUsersCountAC
    | SetIsFetchingACType
    | SetFollowInProgressACType

export type LocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    id: number
    photos: {
        small: string | null,
        large: string | null
    },
    followed: boolean
    name: string
    status: string
    //location: LocationType
}

type InitialStateType = {
    users: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    fetch: boolean
    followInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    fetch: false,
    followInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                fetch: action.fetch
            }
        case SET_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.followInProgress
                    ? [...state.followInProgress, action.id]
                    : state.followInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export type FollowACType = ReturnType<typeof acceptFollow>
export type UnfollowACType = ReturnType<typeof acceptUnfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
export type SetIsFetchingACType = ReturnType<typeof setFetchUsers>
export type SetFollowInProgressACType = ReturnType<typeof setFollowInProgress>


export const acceptFollow = (userId: number) => {
    return {type: FOLLOW, userId} as const
}

export const acceptUnfollow = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}

export const setUsers = (users: UsersPageType[]) => {
    return {type: SET_USERS, users} as const
}

export const setCurrentPage = (pageNumber: number) => {
    return {type: SET_CURRENT_PAGE, pageNumber} as const
}

export const setTotalUsersCount = (count: number) => {
    return {type: SET_TOTAL_USERS_COUNT, count} as const
}

export const setFetchUsers = (fetch: boolean) => {
    return {type: SET_IS_FETCHING, fetch} as const
}

export const setFollowInProgress = (id: number, followInProgress: boolean) => {
    return {type: SET_FOLLOW_IN_PROGRESS, id, followInProgress} as const
}

export const fetchUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<SetIsFetchingACType | SetUsersACType | SetTotalUsersCountAC | SetCurrentPageAC>) => {

    dispatch(setFetchUsers(true))
    dispatch(setCurrentPage(currentPage))
    usersApi.getUsers(currentPage, pageSize).then(res => {
        dispatch(setFetchUsers(false))
        dispatch(setUsers(res.data.items))
        dispatch(setTotalUsersCount(res.data.totalCount))
    })

}


export const follow = (userId: number) => (dispatch: Dispatch<SetFollowInProgressACType | FollowACType>) => {

    dispatch(setFollowInProgress(userId, true))
    usersApi.follow(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(acceptFollow(userId))
            dispatch(setFollowInProgress(userId,false))
        }
    })

}

export const unfollow = (userId: number) => (dispatch: Dispatch<SetFollowInProgressACType | UnfollowACType>) => {

    dispatch(setFollowInProgress(userId, true))
    usersApi.unfollow(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(acceptUnfollow(userId))
            dispatch(setFollowInProgress(userId,false))
        }
    })

}