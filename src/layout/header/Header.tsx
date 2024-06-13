import React from 'react';
import {NavLink} from "react-router-dom";
import {S} from "./Header.styles"
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {selectIsAuth, selectLogin} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";

const Header = () => {

    const login = useAppSelector<string | null>(selectLogin)
    const isAuth = useAppSelector<boolean>(selectIsAuth)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <S.StyledHeader>
            <img alt={""} src={"https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg"}/>

            <div>
                {login ? <span>{login}</span> : <NavLink to={'/login'}>Login</NavLink>}
                {isAuth ? <button onClick={logoutHandler}>logout</button> : "" }
            </div>

        </S.StyledHeader>
    );
};

export default Header;


