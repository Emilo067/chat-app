import {Dispatch} from "redux";
import {fetchAuthData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALISED_SUCCESS'

type InitialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ReturnType<typeof setInitialized>): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export const setInitialized = () => ({
    type: INITIALIZED_SUCCESS
} as const)

export const initializeApp = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await dispatch(fetchAuthData())
        Promise.all([res]).then(() => {
            dispatch(setInitialized())
        })
    } catch (err) {

    }
}