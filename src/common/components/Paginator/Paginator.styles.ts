import styled from "styled-components";

type SelectedPageProps = {
    isSelected: boolean;
};

export const SelectedPage = styled.span<SelectedPageProps>`
  border: 1px solid black;
  font-weight: ${({isSelected}) => (isSelected ? "bold" : "normal")};
  color: ${({isSelected}) => (isSelected ? "red" : "black")};
`;


const PaginatorWrapperStyle = styled.div`
display: flex;
gap: 5px;
`

const PagesWrapper = styled.div`
    display: flex;
  gap: 3px;
`


export const S = {
    SelectedPage,
    PaginatorWrapperStyle,
    PagesWrapper
}