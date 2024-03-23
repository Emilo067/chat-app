import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


let rootReducer = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store