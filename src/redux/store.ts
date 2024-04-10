import ava from '../assets/img/avatarkaPost.png'
// import {sidebarReducer} from "./sidebar-reducer";
// import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profile-reducer";
// import {AddMessageACType, dialogsReducer, UpdateNewMessageTextACType} from "./dialogs-reducer";
//
// type PostType = {
//     post: string,
//     likes: number
// }
//
// type DialogsDataType = {
//     id: number,
//     name: string
// }
//
// type MessageDataType = {
//     id: number,
//     message: string
// }
//
// type ProfilePageType = {
//     posts: PostType[]
//     newPostText: string
// }
//
// type DialogsPageType = {
//     dialogs: DialogsDataType[]
//     messages: MessageDataType[]
//     newMessageText: string
// }
//
// export type FriendsType = {
//     name: string
//     img: string
// }
//
// type SidebarType = {
//     friends: FriendsType[]
// }
//
// export type RootStateType = {
//     dialogsPage: DialogsPageType
//     profilePage: ProfilePageType
//     sidebar: SidebarType
// }
//
// type ActionType = AddPostACType | UpdateNewPostTextACType | UpdateNewMessageTextACType | AddMessageACType
//
//
// export type StoreType = {
//     _state: RootStateType
//     _onChange: () => void
//     getState: () => RootStateType
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionType) => void
// }
//
// let store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Alex'},
//                 {id: 2, name: 'Ben'},
//                 {id: 3, name: 'Igor'},
//                 {id: 4, name: 'Max'}
//             ],
//             messages:
//                 [
//                     {id: 1, message: 'Hi'},
//                     {id: 2, message: 'How are you?'},
//                     {id: 3, message: 'I`m fine'},
//                     {id: 4, message: 'cool'}
//                 ],
//             newMessageText: ''
//         },
//         profilePage: {
//             posts: [
//                 {post: "This is my post", likes: 20},
//                 {post: "This is my post", likes: 33},
//                 {post: "This is my post", likes: 4}
//             ],
//             newPostText: 'IT-INCUBATOR'
//         },
//         sidebar: {
//             friends: [
//                 {name: 'Sasha', img: ava},
//                 {name: 'Sveta', img: ava},
//                 {name: 'Andrew', img: ava}
//             ]
//         }
//     },
//
//     _onChange() {
//         console.log('state changed')
//     },
//
//     getState() {
//         return this._state
//     },
//
//     // addPost ()  {
//     //     this._state.profilePage.posts.push({post: this._state.profilePage.newPostText, likes: 0})
//     //     this._state.profilePage.newPostText = ''
//     //     this._rerenderEntireTree(this._state);
//     // },
//     //
//     // updateNewPostText (text: string) {
//     //     this._state.profilePage.newPostText = text
//     //     this._rerenderEntireTree(this._state);
//     // },
//
//     subscribe(observer: () => void) {
//         this._onChange = observer //наблюдатель // publisher-subscriber
//     },
//
//     dispatch(action: ActionType) {
//
//         // sidebarReducer(this._state.sidebar, action)
//         // //profileReducer(this._state.profilePage, action)
//         // dialogsReducer(this._state.dialogsPage, action)
//
//         this._onChange()
//     }
// }
//
// export default store
//
//
