import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store-redux";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector