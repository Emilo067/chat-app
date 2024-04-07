import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const usersApi = {
    getUsers (currentPage: number, pageSize: number) {
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    follow(userId: number) {
        return instanse.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile (userId: number) {
        console.warn("Is not actuale this method, use please object profileApi")
        return profileApi.getProfile(userId)
    }
}


export const profileApi = {
    getProfile (userId: number) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instanse.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instanse.put('/profile/status', {status})
    }
}

export const authApi = {
    getAuthData () {
        return instanse.get('auth/me')
    }
}