import React from 'react';
import styled from "styled-components";
const Navbar = () => {
    return (
        <StyledNav>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </StyledNav>
    );
};

export default Navbar;

const StyledNav = styled.nav`
  grid-area: n;
  background-color: green;
`