import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

const Header = ({login, isAuth, logout}: HeaderPropsType) => {

    const onCLickHandler = () => {
        logout()
    }

    return (
        <StyledHeader>
            <img alt={""} src={"https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg"}/>

            <div>
                {login ? <span>{login}</span> : <NavLink to={'/login'}>Login</NavLink>}
                {isAuth ? <button onClick={onCLickHandler}>logout</button> : "" }
            </div>

        </StyledHeader>
    );
};

export default Header;


const StyledHeader = styled.header`
  grid-area: h;
  background-color: orange;
  
  div {
    display: flex;
    justify-content: right;
    gap: 10px;
  }
  
  img {
    width: 20px;
  }
  
  a {
    float: right;
  }

  span {
    float: right;
  }
`