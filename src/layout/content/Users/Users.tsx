import React, {FC} from 'react';
import avatarka from "../../../assets/img/avatarkaPost.png";
import styled from "styled-components";
import {UsersPageType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePage: (page: number) => void
    setFollowInProgress: (id: number, isFollow: boolean) => void
    followInProgress: number[]
}

export const Users: FC<UsersPropsType> = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
            {pages.map(p => <SelectedPage
                onClick={() => {
                    props.onChangePage(p)
                }} isSelected={props.currentPage === p}>{p}</SelectedPage>)}
            <div>
                {props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                             <img style={{width: '150px', height: '150px', borderRadius: '70px'}}
                                  src={u.photos.small !== null ? u.photos.small : avatarka} alt=""/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followInProgress.some(us => us === u.id )}
                                onClick={() => {
                                    props.setFollowInProgress(u.id, true)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true}).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                            props.setFollowInProgress(u.id, false)
                                        }
                                    })
                                }
                                }>Unfollow</button>
                            : <button
                                disabled={props.followInProgress.some(us => us === u.id )}
                                onClick={() => {
                                    props.setFollowInProgress(u.id, true)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true}).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                            props.setFollowInProgress(u.id,false)
                                        }
                                    })
                                }
                                }>Follow</button>}
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
  font-weight: ${({isSelected}) => (isSelected ? "bold" : "normal")};
`;