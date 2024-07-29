import styled from "styled-components";

export const Field = styled.input`

  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 100%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: ;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  transition: all .2s ease;

  :hover {
    box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
  }

  :focus {
    outline: 0;
    outline: none;
    background: red;
    box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
  }

  &::placeholder {
    background: -webkit-linear-gradient(#57942f, #66ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`


export const S = {
    Field
}



