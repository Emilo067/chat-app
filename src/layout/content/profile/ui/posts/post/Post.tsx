import React, {FC} from 'react';
import styled from "styled-components";
import {Avatar} from "../../../../../../common/components/Avatar/Avatar";
import ava from '../../../../../../assets/img/avatarkaPost.png'
import {useAppSelector} from "../../../../../../common/hooks/useAppSelector";


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

    const photo = useAppSelector(state => state.profilePage.profile?.photos)

    return (
        <StyledPost>
            <Avatar img={photo?.small ? ava : ''}/>
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
