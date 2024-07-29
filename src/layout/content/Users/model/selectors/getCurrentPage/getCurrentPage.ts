import {AppStateType} from "../../../../../../app/store/store-redux";

export const getCurrentPage = (state: AppStateType) => state.users.currentPage
