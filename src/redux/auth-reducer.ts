
const SET_USER_DATA = 'SET-USER-DATA'

export type InitialStateType = {
    resultCode: number | null
    messages: string[] | null,
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
    }
    isAuth: boolean
}

const initialState = {
    resultCode: null,
    messages: null,
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ReturnType<typeof setAuthData>): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}



export const setAuthData = (data: InitialStateType) => ({type: SET_USER_DATA, data} as const)