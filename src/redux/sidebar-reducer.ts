import ava from "../assets/img/avatarkaPost.png";
import {FriendsType} from "../common/types/types";

export type SidebarType = {
    friends: FriendsType[]
}

type initialStateType = {
    friends: FriendsType[]
}

const initialState: initialStateType = {
    friends: [
        {name: 'Sasha', img: ava},
        {name: 'Sveta', img: ava},
        {name: 'Andrew', img: ava}
    ]
}

export const sidebarReducer = (state: initialStateType = initialState): initialStateType => {



    return state
}