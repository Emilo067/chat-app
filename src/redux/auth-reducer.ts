import {Dispatch} from "redux";
import {authApi, securityApi} from "../api/api";
import {ResultCode} from "../common/enums/enums";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS-'

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

type Actions = ReturnType<typeof setAuthData> | ReturnType<typeof getCaptchaUrlSuccess>

export const authReducer = (state: InitialStateType = initialState, action: Actions): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {
        captchaUrl
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

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch | any) => {
    try {
        const res = await authApi.login(email, password, rememberMe, captcha);
        if (res.data.resultCode === ResultCode.success) {
            dispatch(fetchAuthData())
        } else {
            if (res.data.resultCode === ResultCode.captcha) {
                debugger
                dispatch(getCaptchaUrl())
            }
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch (err: any) {
        console.log(err)
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch | any) => {
    const res = await securityApi.getCaptchaURL()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: Dispatch<ReturnType<typeof setAuthData>>) => {
    try {
        const res = await authApi.logout()
        if (res.data.resultCode === ResultCode.success) {
            dispatch(setAuthData(null, null, null, false))
        }
    } catch (err: any) {
        throw new Error(err)
    }
}