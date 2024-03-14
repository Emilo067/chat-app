import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/store-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType
} from "../../../redux/users-reducer";
import UsersC from "./UsersС";

type mapStateToPropsType = {
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersPageType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

const mapStateToDispatch = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UsersPageType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(UsersC)