import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";

type HeaderContainerPropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header login={this.props.login} logout={this.props.logout} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        user: state.users.users,
        isAuth: state.auth.isAuth
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {logout})
)(HeaderContainer)