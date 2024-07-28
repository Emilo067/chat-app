import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../../app/store/store-redux";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
