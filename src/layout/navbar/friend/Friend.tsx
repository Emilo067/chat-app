import React, {FC} from 'react';
import styled from "styled-components";
import {Avatar} from "../../../components/avatar/Avatar";
import {FriendsType} from "../../../common/types";

type FriendPropsType = {
    friendsData: FriendsType
}

export const Friend: FC<FriendPropsType> = ({friendsData}) => {
    return (
        <StyledFriend>
            <Avatar img={friendsData.img}/>
            <span>{friendsData.name}</span>
        </StyledFriend>
    );
};

const StyledFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  span {
    color: white;
  }
`