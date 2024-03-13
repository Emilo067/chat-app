import React, {FC} from 'react';
import {UsersPageType} from "../../../redux/users-reducer";
import avatarka from  "../../../assets/img/avatarkaPost.png"
import axios from "axios";

type UsersPropsType = {
    usersPage: UsersPageType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersPageType[]) => void
}

export const Users: FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

    const getUsers = () => {
        if(usersPage.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                setUsers(res.data.items)
            })
        }
    }


    return ( <>
            <button onClick={getUsers}>GET USERS</button>
        <div>
            {usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img style={{width: '150px', height:'150px', borderRadius: '70px'}} src={avatarka} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{
                            unfollow(u.id)}}>Unfollow</button> :  <button onClick={()=>{follow(u.id)}}>Follow</button>}
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
        </>
    );
};