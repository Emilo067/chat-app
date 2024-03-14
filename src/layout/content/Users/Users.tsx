import React, {FC} from 'react';
import avatarka from "../../../assets/img/avatarkaPost.png";
import styled from "styled-components";
import {UsersPageType} from "../../../redux/users-reducer";

type UsersPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePage: (page: number) => void
}

export const Users: FC<UsersPropsType> = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        {pages.map(p => <SelectedPage onClick={()=>{props.onChangePage(p)}} isSelected={props.currentPage === p}>{p}</SelectedPage>)}
    <div>
        {props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img style={{width: '150px', height:'150px', borderRadius: '70px'}} src={avatarka} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{
                            props.unfollow(u.id)}}>Unfollow</button> :  <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                    </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>)}
    </div>
        </div>
    );
};

type SelectedPageProps = {
    isSelected: boolean;
};

const SelectedPage = styled.span<SelectedPageProps>`
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;