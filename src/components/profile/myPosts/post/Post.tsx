import React, {FC} from 'react';
import styled from "styled-components";
import img from "../../../../assets/img/avatarkaPost.png"

type PostPropsType = {
    post: string
}

const Post: FC<PostPropsType> = (
    {
        post
    }
) => {
    return (
        <StyledPost>
            <img src={img} alt={""}/>
            {post}
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