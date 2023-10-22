import React from 'react';
import styled from "styled-components";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <StyledMyPosts>
            <h3>My posts</h3>
            <div>
                <textarea style={{width: "100%", resize: "none"}}/>
                <button style={{display: "block", float: "right"}}>Send</button>
            </div>
            <Post post={"This is my post"}/>
            <Post post={"This is my post"}/>
            <Post post={"This is my post"}/>
        </StyledMyPosts>
    );
};

export default MyPosts;

const StyledMyPosts = styled.div`

`