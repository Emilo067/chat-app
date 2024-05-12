import {AppStateType} from "./store-redux";

export const getUsers = (state: AppStateType) => state.users.users
export const getPageSize = (state: AppStateType) => state.users.pageSize
export const getCurrentPage = (state: AppStateType) => state.users.currentPage
export const getTotalUsersCount = (state: AppStateType) => state.users.totalUsersCount
export const getFetch = (state: AppStateType) => state.users.fetch
export const getFollowInProgress = (state: AppStateType) => state.users.followInProgress