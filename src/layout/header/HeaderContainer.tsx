import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {fetchAuthData} from "../../redux/auth-reducer";
import {compose} from "redux";

type HeaderContainerPropsType = {
    fetchAuthData: () => void
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentWillMount() {
        this.props.fetchAuthData()
    }

    render() {
        return <Header login={this.props.login} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.data.login,
        user: state.usersPage.users
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {fetchAuthData})
)(HeaderContainer)