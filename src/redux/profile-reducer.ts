const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type ActionType = AddPostACType | UpdateNewPostTextACType

export type PostType = {
    post: string,
    likes: number
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

// export type InitialStateType = {
//     posts: PostType[],
//     newPostText: string
// }

const initialState: ProfilePageType = {
    posts: [
        {post: "This is my post", likes: 20},
        {post: "This is my post", likes: 33},
        {post: "This is my post", likes: 4}
    ],
    newPostText: 'IT-INCUBATOR'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {post: state.newPostText, likes: 0}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText} as const
}



