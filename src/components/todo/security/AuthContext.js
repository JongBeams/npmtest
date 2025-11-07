import { createContext, useContext, useState } from "react";

//Context 생성
export const AuthContext = createContext()

//hook 사용 인증 통해서 사용 가능
export const useAuth = ()=>useContext(AuthContext)

//다른 component에 생성된 context 공유
export default function AuthProvider({ children }) {

    //context 에 state 넣기 
    //const [number, setNumber] = useState(0);

    const [isAuthenticated, setAuthenticated] = useState(false);

    //특정 초마다 특정함수 호출 기능
    // 함수값은 number값의 업데이트
    //setInterval(() => setNumber(number + 1), 10000)

    //변수 추출 보통 사용하지 않고 바로 넣는다
    //const valueToBeShared= { number,isAuthenticated,setAuthenticated }
    //<AuthContext.Provider value={valueToBeShared}>


    function login(username,password){
        if (username === 'jongbeom' && password === '1q2w3e4r') {
            setAuthenticated(true)
            return true
        }
        else {
            setAuthenticated(false)
            return false
        }
    }

      function logout(){
        setAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated,setAuthenticated,login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}

