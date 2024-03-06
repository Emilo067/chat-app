import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let rootReducer = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(rootReducer)


export default store