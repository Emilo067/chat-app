import styled from "styled-components";
import {theme} from "../../app/styles/theme";

const Header = styled.header`
  grid-area: h;
  background-color: ${theme.colors.primaryBg};
  border: ${theme.colors.border};
  border-radius: 0 0 15px 15px;
  transform: translateY(-1px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  
  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  img {
    width: 400px;
  }
  
  a {
    float: right;
  }

  span {
    float: right;
  }
`

const WrapperNameButton = styled.div`
  display: flex;
  align-items: center;
`

export const S = {
    Header,
    WrapperNameButton
}