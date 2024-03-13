import React from "react";
import axios from "axios";
import {UsersPageType} from "../../../redux/users-reducer";
import avatarka from "../../../assets/img/avatarkaPost.png";

type UsersCType = {
    setUsers: (users: UsersPageType[]) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    usersPage: UsersPageType[]
}

class UsersC extends React.Component<UsersCType> {
   constructor(props: UsersCType) {
       super(props);

       alert('HELLO')

       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
           this.props.setUsers(res.data.items)
       })
   }

   render() {return <>
           <div>
               {this.props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img style={{width: '150px', height:'150px', borderRadius: '70px'}} src={avatarka} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{
                            this.props.unfollow(u.id)}}>Unfollow</button> :  <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
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
   }
}

export default UsersC