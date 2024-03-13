import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/store-redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType} from "../../../redux/users-reducer";
import UsersC from "./UsersС";

type mapStateToPropsType = {
    usersPage: UsersPageType[]
}

type mapDispatchToPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UsersPageType[]) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}

const mapStateToDispatch = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UsersPageType[]) => dispatch(setUsersAC(users))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(UsersC)