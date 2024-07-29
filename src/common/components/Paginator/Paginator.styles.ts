import styled from "styled-components";

type SelectedPageProps = {
    isSelected?: boolean;
};

export const SelectedPage = styled.span<SelectedPageProps>`
  position: relative;
  padding: 20px 25px;
  text-decoration: none;
  color: ${props => props.isSelected ? '#13FF0C' : '#fff'};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;


const PaginatorWrapperStyle = styled.div`
  position: relative;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  border-radius: 2px;
`

const PagesWrapper = styled.div`
  list-style-type: none;
  display: inline-block;
  
 
`


export const S = {
    SelectedPage,
    PaginatorWrapperStyle,
    PagesWrapper
}
