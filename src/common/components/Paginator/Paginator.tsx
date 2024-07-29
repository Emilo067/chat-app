import React, {useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {S, SelectedPage} from './Paginator.styles'


type Props = {
    onChangePage: (value: number) => void
    portionSize: number
}

export const Paginator = ({onChangePage, portionSize}: Props) => {
    const totalUsersCount = useAppSelector<number>(state => state.users.totalUsersCount)
    const pageSize = useAppSelector<number>(state => state.users.pageSize)
    const currentPage = useAppSelector<number>(state => state.users.currentPage)


    const initialPortionNumber = Math.ceil(currentPage / portionSize);
    const [portionNumber, setPortionNumber] = useState(initialPortionNumber)
    console.log(portionNumber)
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionsCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    const clickLeftPortionNumbePageHandler = () => {
        setPortionNumber(portionNumber - 1)
    }

    const clickRightPortionNumbePageHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (<S.PaginatorWrapperStyle>
            {portionNumber > 1 && <SelectedPage onClick={clickLeftPortionNumbePageHandler}>Prev</SelectedPage>}
            <S.PagesWrapper>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => <S.SelectedPage
                    onClick={() => {
                        onChangePage(p)
                    }} isSelected={currentPage === p}>{p}</S.SelectedPage>)}
            </S.PagesWrapper>
            {portionsCount > portionNumber && <SelectedPage onClick={clickRightPortionNumbePageHandler}>Next</SelectedPage>}
        </S.PaginatorWrapperStyle>
    );
};


