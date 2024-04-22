import React, {FC} from 'react';
import styled from "styled-components";
import {Avatar} from "../../../../../common/components/Avatar/Avatar";
import ava from '../../../../../assets/img/avatarkaPost.png'


type PostPropsType = {
    post: string
    likes: number
}

const Post: FC<PostPropsType> = (
    {
        post,
        likes
    }
) => {
    return (
        <StyledPost>
            <Avatar img={ava}/>
            {post}
            <div>likes: {likes}</div>
        </StyledPost>
    );
};

export default Post;

const StyledPost = styled.div`
  margin-bottom: 10px;
  img{
    width: 80px;
    height: 30px;
  }
`