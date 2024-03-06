import React, {FC} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

type MyPostsPropsType = {}

const MyPostsContainer: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    // const state = props.store.getState();
    // const addPost = () => {
    //     props.store.dispatch(addPostAC())
    // }
    //
    // const onPostChange = (text: string) => {
    //     props.store.dispatch(updateNewPostTextAC(text))
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    );
}
    export default MyPostsContainer;