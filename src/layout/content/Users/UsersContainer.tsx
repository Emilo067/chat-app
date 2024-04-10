import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {fetchUsers, follow, unfollow, UsersPageType} from "../../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../../components/Preloader/Preloader";
import {WithAuthRedirect} from "../../../common/hoc/WithAuthRedirect";
import {compose} from "redux";

type UsersContainerType = {
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    fetch: boolean
    followInProgress: number[]
    fetchUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isAuth: boolean
}

class UsersContainerComponent extends React.Component<UsersContainerType> {

    componentWillMount() {
        this.props.fetchUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangeHandler = (page: number) => {
        this.props.fetchUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.fetch ? <Preloader/> :
                <Users isAuth={this.props.isAuth}
                       usersPage={this.props.usersPage}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       onChangePage={this.onChangeHandler}
                       followInProgress={this.props.followInProgress}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
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
    followInProgress: number[]
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        fetch: state.usersPage.fetch,
        followInProgress: state.usersPage.followInProgress,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        fetchUsers,
        follow,
        unfollow
    }),
    WithAuthRedirect
)(UsersContainerComponent)