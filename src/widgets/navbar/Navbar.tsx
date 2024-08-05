import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Friend} from "./friend/Friend";
import {SidebarType} from "../../redux/sidebar-reducer";
import {theme} from "../../app/styles/theme";
import {Container} from "../../common/components/Container";

type NavbarPropsType = {
    sidebarData: SidebarType
}

const Navbar: FC<NavbarPropsType> = ({sidebarData}) => {

    const friendsMap = sidebarData.friends.map((f, i) => {
        return <Friend key={i} friendsData={f}/>
    })

    return (<StyledNavbarContent>
            <Container>
                    <StyledNav>
                        <StyledItem>
                            <NavLink to={'/profile'}>Profile</NavLink>
                        </StyledItem>
                        <StyledItem>
                            <NavLink to={'/dialogs'}>Messages</NavLink>
                        </StyledItem>
                        <StyledItem>
                            <NavLink to={'/users'}>Users</NavLink>
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
            </Container>
                </StyledNavbarContent>
);
};

// const Navbar: FC<NavbarPropsType> = () => {
//
//     // const friendsMap = sidebarData.friends.map((f, i) => {
//     //     return <Friend key={i} friendsData={f}/>
//     // })
//
//     return (
//         <StoreContext.Consumer>
//             {(store)=>{
//                 let state = store.getState().sidebar.friends;
//
//                 const friendsMap = state.map((f: any, i: any) => {
//                     return <Friend key={i} friendsData={f}/>
//                 })
//
//                 return  <StyledNavbarContent>
//                     <StyledNav>
//                         <StyledItem>
//                             <NavLink to={'/profile'}>Profile</NavLink>
//                         </StyledItem>
//                         <StyledItem>
//                             <NavLink to={'/dialogs'}>Messages</NavLink>
//                         </StyledItem>
//                         <StyledItem>
//                             <NavLink to={'/news'}>News</NavLink>
//                         </StyledItem>
//                         <StyledItem>
//                             <NavLink to={'/music'}>Music</NavLink>
//                         </StyledItem>
//                         <StyledItem>
//                             <NavLink to={'/settings'}>Settings</NavLink>
//                         </StyledItem>
//                     </StyledNav>
//
//                     <TitleFriends>Friends</TitleFriends>
//                     <StyledFriendsContent>
//
//                         {friendsMap}
//
//                     </StyledFriendsContent>
//                 </StyledNavbarContent>
//             }}
//     </StoreContext.Consumer>
//     );
// };

export default Navbar;

const StyledNavbarContent = styled.div`
  padding-left: 10px;
  grid-area: n;
  border-radius: 15px; 
  background-color: ${theme.colors.primaryBg};
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
