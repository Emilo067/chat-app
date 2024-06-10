import {AppThunkDispatch} from "../../redux/store-redux";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();