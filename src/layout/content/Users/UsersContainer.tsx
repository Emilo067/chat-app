import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {
    follow,
    setCurrentPage, setFetchUsers,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersPageType
} from "../../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../../components/Preloader/Preloader";
import {usersApi} from "../../../api/api";

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
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setFetchUsers(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onChangeHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setFetchUsers(true)
        usersApi.getUsers(page, this.props.pageSize)
            .then(res => {
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
                       onChangePage={this.onChangeHandler}
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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        fetch: state.usersPage.fetch
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetchUsers
})(UsersContainerComponent)