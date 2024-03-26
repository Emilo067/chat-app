import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
}

const Header = ({login}: HeaderPropsType) => {
    return (
        <StyledHeader>
            <img alt={""} src={"https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg"}/>

            {login ? <span>{login}</span> : <NavLink to={'/login'}>Login</NavLink>}
        </StyledHeader>
    );
};

export default Header;


const StyledHeader = styled.header`
  grid-area: h;
  background-color: orange;

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