import React, {FC} from 'react';
import {UsersPageType} from "../../../redux/users-reducer";

type UsersPropsType = {
    usersPage: UsersPageType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersPageType[]) => void
}

export const Users: FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

    if(usersPage.length === 0) {
        setUsers([
            {
                id: 1, avatarUrl: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', followed:
                    true, fullName:
                    'Dmitry K.', status:
                    'I am looking a job right now',
                location:
                    {
                        country: 'Belarus', city:
                            'Minsk'
                    }
            }
            ,
            {
                id: 2, avatarUrl: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', followed:
                    false, fullName:
                    'Svetlana D.', status:
                    'I am so pretty',
                location:
                    {
                        country: 'Belarus', city:
                            'Minsk'
                    }
            }
            ,
            {
                id: 3, avatarUrl: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', followed:
                    true, fullName:
                    'Sergey S.', status:
                    'I like football',
                location:
                    {
                        country: 'Ukraine', city:
                            'Kiev'
                    }
            }
            ,
            {
                id: 4, avatarUrl: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png', followed:
                    true, fullName:
                    'Andrew T.', status:
                    'I am free to help you to create a good Video Production',
                location:
                    {
                        country: 'United States', city:
                            'Philadelphia'
                    }
            }
        ])
    }

    return (
        <div>
            {usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img style={{width: '150px', height:'150px', borderRadius: '70px'}} src={u.avatarUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{debugger
                            unfollow(u.id)}}>Unfollow</button> :  <button onClick={()=>{follow(u.id)}}>Follow</button>}
                    </div>
                    </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};