import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <StyledHeader>
            <img alt={""} src={"https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg"}/>
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

`