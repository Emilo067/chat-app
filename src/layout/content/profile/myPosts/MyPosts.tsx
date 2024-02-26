import React, {FC, useRef} from 'react';
import styled from "styled-components";
import Post from "./post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {ActionType, ProfilePageType} from "../../../../redux/state";

type MyPostsPropsType = {
    postData: ProfilePageType
    dispatch: (action: ActionType) => void
}

const MyPosts: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)


    const addPostHandler = () => {
        if (newPostElement.current !== null) {
            props.dispatch(addPostAC())
        }

    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value))
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            addPostHandler()
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
                          onKeyDown={(e)=>onKeyPressHandler(e)}
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