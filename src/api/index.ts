
import axios from 'axios';

export const api = axios.createApi({
    'https://cdn.dummyjson.com/'
})

export const apiRoutes = {
    login: 'login',
    register: 'register',
    getUser: 'user/profile',
    animals: 'cards',
    listening: 'listening',
    worsd: 'words',
    users: 'topWusers',
}