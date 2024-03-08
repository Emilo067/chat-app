import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/store-redux";
import {Dispatch} from "redux";

// type MyPostsPropsType = {}

// const MyPostsContainer: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {
//
//     // const state = props.store.getState();
//     // const addPost = () => {
//     //     props.store.dispatch(addPostAC())
//     // }
//     //
//     // const onPostChange = (text: string) => {
//     //     props.store.dispatch(updateNewPostTextAC(text))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState();
//
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//
//                 const onPostChange = (text: string) => {
//                     store.dispatch(updateNewPostTextAC(text))
//                 }
//
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     );
// }

type mapStateToPropsType = {
    profilePageState: ProfilePageType
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: () => void
}

function mapStateToProps(state: AppStateType): mapStateToPropsType {
    return {
        profilePageState: state.profilePage
    }
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
    return {
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostAC())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;