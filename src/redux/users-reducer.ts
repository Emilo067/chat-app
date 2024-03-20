const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageAC
    | SetTotalUsersCountAC
    | SetIsFetchingACType

export type LocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    id: number
    photos:  {
        small: null,
        large: null
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
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    fetch: false
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
        default:
            return state
    }
}

export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
export type SetIsFetchingACType = ReturnType<typeof setFetchUsers>


export const follow = (userId: number) => {
    return {type: FOLLOW, userId} as const
}

export const unfollow = (userId: number) => {
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