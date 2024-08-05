import React from 'react';
import {NavLink} from "react-router-dom";
import {S} from "./Header.styles"
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {selectIsAuth, selectLogin} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {Container} from "../../common/components/Container";
import svgLogo from '../../assets/svg/Social Network.svg'
import {Button} from "../../common/components/Button/Button";

const Header = () => {

    const login = useAppSelector<string | null>(selectLogin)
    const isAuth = useAppSelector<boolean>(selectIsAuth)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <S.Header>
            <Container>
                <img alt={""}
                     src={svgLogo}/>

                <S.WrapperNameButton>
                    {login ? <span>{login}</span> : <Button><NavLink style={{textDecoration: "none"}} to={'/login'}>Login</NavLink></Button>}
                    {isAuth ? <Button onClick={logoutHandler}>logout</Button> : ""}
                </S.WrapperNameButton>
            </Container>
        </S.Header>
    );
};

export default Header;


