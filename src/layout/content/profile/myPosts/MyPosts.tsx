import React, {FC, useRef} from 'react';
import styled from "styled-components";
import Post from "./post/Post";
import {ProfilePageType} from "../../../../redux/state";

type MyPostsPropsType = {
    postData: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)


    const addPostHandler = () => {
        debugger;
        if (newPostElement.current !== null) {
            props.addPost()
        }

    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    const posts = props.postData.posts.map(p => {
        return <Post post={p.post} likes={p.likes}/>
    })

    return (
        <StyledMyPosts>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeHandler} value={props.postData.newPostText} ref={newPostElement}
                          style={{width: "100%", resize: "none"}}/>
                <button onClick={addPostHandler} style={{display: "block", float: "right"}}>Send</button>
            </div>

            {posts}

        </StyledMyPosts>
    );
};

export default MyPosts;

const StyledMyPosts = styled.div`

`