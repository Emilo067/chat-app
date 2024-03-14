const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

type ActionType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageAC | SetTotalUsersCountAC

export type LocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    id: number
    photos: any
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
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountAC = ReturnType<typeof setTotalUsersCountAC>


export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}

export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}

export const setUsersAC = (users: UsersPageType[]) => {
    return {type: SET_USERS, users} as const
}

export const setCurrentPageAC = (pageNumber: number) => {
    return {type: SET_CURRENT_PAGE, pageNumber} as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {type: SET_TOTAL_USERS_COUNT, count} as const
}