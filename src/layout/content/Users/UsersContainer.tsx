import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/store-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType
} from "../../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../../../components/Preloader/Preloader";

type UsersContainerType = {
    setUsers: (users: UsersPageType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    setFetchUsers: (fetch: boolean) => void
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    fetch: boolean
}

class UsersContainerComponent extends React.Component<UsersContainerType> {

    componentWillMount() {
        this.props.setFetchUsers(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
            this.props.setFetchUsers(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    handler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setFetchUsers(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(res => {
            this.props.setFetchUsers(false)
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <>
            {this.props.fetch ? <Preloader/> :
            <Users usersPage={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   totalUsersCount={this.props.totalUsersCount}
                   onChangePage={this.handler}
            />
            }
        </>
    }
}


type mapStateToPropsType = {
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    fetch: boolean
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersPageType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setFetchUsers: (fetch: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        fetch: state.usersPage.fetch
    }
}

const mapStateToDispatch = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UsersPageType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count)),
        setFetchUsers: (fetch: boolean) => dispatch(setIsFetchingAC(fetch))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(UsersContainerComponent)