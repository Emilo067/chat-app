import {theme} from "../../../app/styles/theme";

import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  border-radius: 5px;
  border: ${theme.colors.border};
  background: linear-gradient(90deg, #00ff00, #009900);
  color: white;
  font-family: 'Orbitron Variable', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  padding: 5px 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: linear-gradient(90deg, #009900, #00ff00);
    box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
  }
  
  &:active {
    background: linear-gradient(90deg, #009900, #00ff00);
    box-shadow: none;
  }
`;

export const S = {
    Button
};
