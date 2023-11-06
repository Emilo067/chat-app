import React, {FC, useRef} from 'react';
import styled from "styled-components";
import Post from "./post/Post";
import {PostType} from "../../../../redux/state";

type MyPostsPropsType = {
    postData: PostType[]
    addPost: (text: string) => void

}

const MyPosts: FC<MyPostsPropsType> = ({postData, addPost}) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)


    const addPostHandler = () => {
        if (newPostElement.current !== null) {
            addPost(newPostElement.current.value)
        }
    }

    const posts = postData.map(p => {
        return <Post post={p.post} likes={p.likes}/>
    })

    return (
        <StyledMyPosts>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} style={{width: "100%", resize: "none"}}/>
                <button onClick={addPostHandler} style={{display: "block", float: "right"}}>Send</button>
            </div>

            {posts}

        </StyledMyPosts>
    );
};

export default MyPosts;

const StyledMyPosts = styled.div`

`