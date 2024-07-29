import {AppStateType} from "../../../../../../app/store/store-redux";

export const getTotalUsersCount = (state: AppStateType) => state.users.totalUsersCount
