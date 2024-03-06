import {ActionType, SidebarType} from "./store";
import ava from "../assets/img/avatarkaPost.png";

const initialState: SidebarType = {
    friends: [
        {name: 'Sasha', img: ava},
        {name: 'Sveta', img: ava},
        {name: 'Andrew', img: ava}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType): SidebarType => {



    return state
}