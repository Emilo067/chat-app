import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {InitialStateType, setAuthData} from "../../redux/auth-reducer";
import axios from "axios";

type HeaderContainerPropsType = {
    setAuthData: (data: InitialStateType) => void
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentWillMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((res)=>{
            this.props.setAuthData({...res.data, isAuth: res.data.resultCode === 0});
        })
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

export default connect(mapStateToProps, {setAuthData})(HeaderContainer)