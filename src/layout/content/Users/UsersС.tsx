import React from "react";
import axios from "axios";
import {UsersPageType} from "../../../redux/users-reducer";
import avatarka from "../../../assets/img/avatarkaPost.png";
import styled from "styled-components";

type UsersCType = {
    setUsers: (users: UsersPageType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    usersPage: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class UsersC extends React.Component<UsersCType> {

   componentWillMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
           this.props.setUsers(res.data.items)
           this.props.setTotalUsersCount(res.data.totalCount)
       })
   }

   handler = (page: number) => {
        this.props.setCurrentPage(page)
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(res => {
           this.props.setUsers(res.data.items)
       })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

       return <div>
           {pages.map(p => <SelectedPage onClick={()=>{this.handler(p)}} isSelected={this.props.currentPage === p}>{p}</SelectedPage>)}
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
       </div>
   }
}

type SelectedPageProps = {
    isSelected: boolean;
};

const SelectedPage = styled.span<SelectedPageProps>`
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

export default UsersC