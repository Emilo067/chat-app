import React, {FC} from 'react';
import avatarka from "../../../assets/img/avatarkaPost.png";
import {UsersPageType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../../../common/components/Paginator/Paginator";

type UsersPropsType = {
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePage: (page: number) => void
    followInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isAuth: boolean
}

export const Users: FC<UsersPropsType> = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator onChangePage={props.onChangePage} portionSize={10}/>
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
                                disabled={props.followInProgress.some(us => us === u.id)}
                                onClick={() => {
                                    props.unfollow(u.id)
                                    //props.followThunk(u.id)
                                }
                                }>Unfollow</button>
                            : <button
                                disabled={props.followInProgress.some(us => us === u.id)}
                                onClick={() => {
                                    props.follow(u.id)
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



