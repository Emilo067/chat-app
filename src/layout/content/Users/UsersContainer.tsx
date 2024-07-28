import {connect} from "react-redux";
import {AppStateType} from "../../../app/store/store-redux";
import {fetchUsers, follow, unfollow, UsersPageType} from "./model/reducer/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {compose} from "redux";
import {selectIsAuth} from "../../../redux/auth-selectors";
import {getUsers} from "./model/selectors/getUsers/getUsers";
import {getPageSize} from "./model/selectors/getPageSize/getPageSize";
import {getCurrentPage} from "./model/selectors/getCurrentPage/getCurrentPage";
import {getTotalUsersCount} from "./model/selectors/getTotalUsersCount/getTotalUsersCount";
import {getFetch} from "./model/selectors/getFetch/getFetch";
import {getFollowInProgress} from "./model/selectors/getFollowInProgress/getFollowInProgress";

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

// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         usersPage: state.users.users,
//         pageSize: state.users.pageSize,
//         currentPage: state.users.currentPage,
//         totalUsersCount: state.users.totalUsersCount,
//         fetch: state.users.fetch,
//         followInProgress: state.users.followInProgress,
//         isAuth: state.auth.isAuth
//     }
// }

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        fetch: getFetch(state),
        followInProgress: getFollowInProgress(state),
        isAuth: selectIsAuth(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        fetchUsers,
        follow,
        unfollow
    })
)(UsersContainerComponent)
