import axios from "axios"
export const axiosInstance = axios.create({
    baseURL: 'http://192.168.2.145:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})