import {AppStateType} from "../../../../../../app/store/store-redux";

export const getPageSize = (state: AppStateType) => state.users.pageSize
