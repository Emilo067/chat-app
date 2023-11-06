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



export const state: RootStateType = {
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
        ]
    },
    sidebar: {
        friends: [
            {name: 'Sasha', img: ava},
            {name: 'Sveta', img: ava},
            {name: 'Andrew', img: ava}
        ]
    }
}


export const addPost = (text: string) => {
    state.profilePage.posts.push({post: text, likes: 0})
}