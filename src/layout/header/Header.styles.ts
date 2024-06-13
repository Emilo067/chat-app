import styled from "styled-components";

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

export const S = {
    StyledHeader
}