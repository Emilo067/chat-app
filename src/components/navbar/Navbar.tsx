import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <StyledNav>
            <StyledItem>
                {/*<a href={'/profile'}>Profile</a>*/}
                <NavLink to={'/profile'}>Profile</NavLink>
            </StyledItem>
            <StyledItem>
                {/*<a href={'/dialogs'}>Messages</a>*/}
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </StyledItem>
            <StyledItem>
                {/*<a href={'/news'}>News</a>*/}
                <NavLink to={'/news'}>News</NavLink>
            </StyledItem>
            <StyledItem>
                {/*<a href={'/music'}>Music</a>*/}
                <NavLink to={'/music'}>Music</NavLink>
            </StyledItem>
            <StyledItem>
                {/*<a href={'/settings'}>Settings</a>*/}
                <NavLink to={'/settings'}>Settings</NavLink>
            </StyledItem>
        </StyledNav>
    );
};

export default Navbar;

const StyledNav = styled.nav`
  padding-left: 10px;
  grid-area: n;
  background-color: green;
`

const StyledItem = styled.div`

  & > a {
    color: white;
    text-decoration: none;
  }

  & > a.active {
    text-decoration: none;
    color: gold;
  }

  & > a:hover {
    color: goldenrod; /* Цвет ссылки */
  }
`