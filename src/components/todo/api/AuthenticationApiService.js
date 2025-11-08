import {apiClient} from './apiClient'

//인증 토큰 받기
export const executeBasicAuthenticationService
    = (token)=> apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})


//JWT 토큰 받기
export const executeJwtAuthenticationService
    = (username,password)=> 
        apiClient.post(`/authenticate`,{username,password})