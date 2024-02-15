import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/state";
import {Friend} from "./friend/Friend";

type NavbarPropsType = {
    sidebarData: SidebarType
}

const Navbar: FC<NavbarPropsType> = ({sidebarData}) => {

    const friendsMap = sidebarData.friends.map((f, i) => {
        return <Friend key={i} friendsData={f}/>
    })

    return (
        <StyledNavbarContent>
            <StyledNav>
                <StyledItem>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </StyledItem>
                <StyledItem>
                    <NavLink to={'/dialogs'}>Messages</NavLink>
                </StyledItem>
                <StyledItem>
                    <NavLink to={'/news'}>News</NavLink>
                </StyledItem>
                <StyledItem>
                    <NavLink to={'/music'}>Music</NavLink>
                </StyledItem>
                <StyledItem>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </StyledItem>
            </StyledNav>

            <TitleFriends>Friends</TitleFriends>
            <StyledFriendsContent>

                {friendsMap}

            </StyledFriendsContent>
        </StyledNavbarContent>

    );
};

export default Navbar;

const StyledNavbarContent = styled.div`
  padding-left: 10px;
  grid-area: n;
  background-color: green;
`


const StyledNav = styled.nav`

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

const StyledFriendsContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`

const TitleFriends = styled.h3`
  margin: 40px 0 10px 0;
  text-align: center;
  color: white;
`