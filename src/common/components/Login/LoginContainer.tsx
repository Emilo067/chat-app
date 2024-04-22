import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Login} from "./Login";
import {AppStateType} from "../../../redux/store-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)