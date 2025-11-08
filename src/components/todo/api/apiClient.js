import axios from 'axios'

//기본 URL 지정
export const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)