import {
    addPostAC,
    ProfilePageType,
    profileReducer,
    ProfileType,
    setProfileStatus,
    setUserProfileAC
} from "./profile-reducer";

it('should be post added correctly', () => {
    let action = addPostAC('Test post')

    const startState: ProfilePageType = {
        posts: [
            {post: "This is my post", likes: 20},
            {post: "This is my post", likes: 33},
            {post: "This is my post", likes: 4}
        ],
        profile: null,
        status: ''
    }

    const endState = profileReducer(startState, action)

    expect(startState.posts.length).toBe(3)
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].post).toBe('Test post')
    expect(endState.posts[3].likes).toBe(0)
})

it('should be profile set correctly', () => {
    const profile: ProfileType = {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: 'Emilo',
        userId: 30298,
        photos: {
            small: null,
            large: null
        }
    }

    let action = setUserProfileAC(profile)



    const startState: ProfilePageType = {
        posts: [
            {post: "This is my post", likes: 20},
            {post: "This is my post", likes: 33},
            {post: "This is my post", likes: 4}
        ],
        profile: null,
        status: ''
    }

    const endState = profileReducer(startState, action)

    expect(startState.profile).toBe(null)
    expect(endState.profile).toEqual(profile)
})

it('should be status added correctly', () => {

    let action = setProfileStatus('Test status')

    const startState: ProfilePageType = {
        posts: [
            {post: "This is my post", likes: 20},
            {post: "This is my post", likes: 33},
            {post: "This is my post", likes: 4}
        ],
        profile: null,
        status: ''
    }

    const endState = profileReducer(startState, action)

    expect(startState.status).toBe('')
    expect(endState.status).toEqual('Test status')
})