import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const usersApi = {
    getUsers (currentPage: number, pageSize: number) {
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
    }
}

export const authApi = {
    getAuthData () {
        return instanse.get('auth/me')
    }
}


export const profileApi = {
    getProfile (userId: string) {
        return instanse.get(`profile/${userId}`)
    }
}