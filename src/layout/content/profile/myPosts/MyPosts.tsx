import React, {FC, useRef} from 'react';
import styled from "styled-components";
import Post from "./post/Post";
import {PostType, ProfilePageType} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    profilePageState: ProfilePageType
}

const MyPosts: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)


    const onAddPost = () => {
        if (newPostElement.current !== null) {
            props.addPost()
        }

    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            onAddPost()
        }
    }

    const posts = props.profilePageState.posts.map((p,i) => {
        return <Post key={i} post={p.post} likes={p.likes}/>
    })

    return (
        <StyledMyPosts>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.profilePageState.newPostText} ref={newPostElement}
                          onKeyDown={(e)=>onKeyPressHandler(e)}
                          style={{width: "100%", resize: "none"}}/>
                <button onClick={onAddPost} style={{display: "block", float: "right"}}>Send</button>
            </div>

            {posts}

        </StyledMyPosts>
    );
};

export default MyPosts;

const StyledMyPosts = styled.div`

`