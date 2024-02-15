import ava from '../assets/img/avatarkaPost.png'



export type PostType = {
    post: string,
    likes: number
}

export type DialogsDataType = {
    id: number,
    name: string
}

export type MessageDataType = {
    id: number,
    text: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
}

export type FriendsType = {
    name: string
    img: string
}

export type SidebarType = {
    friends: FriendsType[]
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}


let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Ben'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Max'}
            ],
            messages: [
                {id: 1, text: 'Hi'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: 'I`m fine'},
                {id: 4, text: 'cool'}
            ]
        },
        profilePage: {
            posts: [
                {post: "This is my post", likes: 20},
                {post: "This is my post", likes: 33},
                {post: "This is my post", likes: 4}
            ],
            newPostText: 'IT-INCUBATOR'
        },
        sidebar: {
            friends: [
                {name: 'Sasha', img: ava},
                {name: 'Sveta', img: ava},
                {name: 'Andrew', img: ava}
            ]
        }
    },

    _rerenderEntireTree (state: RootStateType) {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

    addPost ()  {
        this._state.profilePage.posts.push({post: this._state.profilePage.newPostText, likes: 0})
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree(this._state);
    },

    updateNewPostText (text: string) {
        this._state.profilePage.newPostText = text
        this._rerenderEntireTree(this._state);
    },

    subscribe (observer: (state: RootStateType)=>void) {
        this._rerenderEntireTree = observer //наблюдатель // publisher-subscriber
    }
}

export default store


