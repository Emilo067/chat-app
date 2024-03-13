const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type ActionType = FollowACType | UnfollowACType | SetUsersACType

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
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>


export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}

export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}

export const setUsersAC = (users: UsersPageType[]) => {
    return {type: SET_USERS, users} as const
}
