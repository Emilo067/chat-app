import React, {ComponentType} from 'react';
import {AppStateType} from "../../app/store/store-redux";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = <T,>(Component: ComponentType<T>) => {
    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props

        if(!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T & {}}/>
    }


    return connect(mapStateToProps)(RedirectComponent);
};
