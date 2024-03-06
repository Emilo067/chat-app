import React, {FC} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
 store: any
}

const MyPostsContainer: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {
    debugger
    const state = props.store.getState();
    const addPost = () => {
            props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
            props.store.dispatch(updateNewPostTextAC(text))
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />
};

export default MyPostsContainer;