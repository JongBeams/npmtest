import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import {apiClient}from '../api/apiClient'

//Context 생성
export const AuthContext = createContext()

//hook 사용 인증 통해서 사용 가능
export const useAuth = () => useContext(AuthContext)

//다른 component에 생성된 context 공유
export default function AuthProvider({ children }) {

    //context 에 state 넣기 
    //const [number, setNumber] = useState(0);

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const [token,setToken] =useState(null)

    //특정 초마다 특정함수 호출 기능
    // 함수값은 number값의 업데이트
    //setInterval(() => setNumber(number + 1), 10000)

    //변수 추출 보통 사용하지 않고 바로 넣는다
    //const valueToBeShared= { number,isAuthenticated,setAuthenticated }
    //<AuthContext.Provider value={valueToBeShared}>


    // function login(username,password){
    //     if (username === 'jongbeom' && password === '1q2w3e4r') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    //async :  항상 Promise를 반환, await : Promise가 완료될 때까지 기다립니다, Promise : 미래에 완료될 작업
    async function login(username, password) {

        //btoa - base64 인코딩
        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        console.log(baToken)
        console.log(username)
        console.log(password)
        try {
            const response = await executeBasicAuthenticationService(baToken)

            if (response.status === 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('인터셉트 토큰')
                        config.headers.Authorization=baToken
                        return config
                    }
                )
                
                return true
            }
            else {
                setAuthenticated(false)
                setUsername(null)
                setToken(null)
                return false
            }
        }
        catch (error) {
            setAuthenticated(false)
            setUsername(null)
            setToken(null)
            return false
        }

    }


    function logout() {
        setAuthenticated(false)
        setToken(null)
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, login, logout, username,token }}>
            {children}
        </AuthContext.Provider>
    )
}

