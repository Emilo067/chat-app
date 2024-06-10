import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";


let rootReducer = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>

// @ts-ignore
window.store = store

export default store