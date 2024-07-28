import {AppThunkDispatch} from "../../app/store/store-redux";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
