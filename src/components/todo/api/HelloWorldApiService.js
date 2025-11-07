import {apiClient} from './apiClient'

// export default function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }


//api 관련은 이걸 많이 사용
export const retrieveHelloWorldBean 
    = ()=> apiClient.get('/hello-world-bean')

//파라미터 넣는 법
export const retrieveHelloWorldPathVariable 
    = (name)=> apiClient.get(`/hello-world/path-variable/${name}`)

//인증 토큰 받기
export const executeBasicAuthenticationService
    = (token)=> apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})