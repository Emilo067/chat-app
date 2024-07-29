import {AppStateType} from "../../../../../../app/store/store-redux";

export const getFollowInProgress = (state: AppStateType) => state.users.followInProgress
