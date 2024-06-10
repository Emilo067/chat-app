import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {ResultCode} from "../common/enums/enums";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ReturnType<typeof setAuthData>): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {
        id, email, login, isAuth
    }
} as const)

export const fetchAuthData = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.getAuthData()
        if (res.data.resultCode === ResultCode.success) {
            let {id, email, login} = res.data.data
            dispatch(setAuthData(id, email, login, true));
        }
    } catch (err) {
        console.log(err)
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch | any) => {
    try {
        const res = await authApi.login(email, password, rememberMe);
        debugger
        if (res.data.resultCode === ResultCode.success) {
            dispatch(fetchAuthData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch (err: any) {
        debugger
        console.log(err)
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.logout()
        if (res.data.resultCode === ResultCode.success) {
            dispatch(setAuthData(null, null, null, false))
        }
    } catch (err: any) {
        throw new Error(err)
    }
}