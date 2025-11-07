import { useAuth } from "./security/AuthContext"

function LogoutComponent() {

        const authContext =useAuth()
        authContext.setAuthenticated(false)
    return (
        <div className="LogoutComponent">
            <h1>로그아웃 했습니다.</h1>
            <div>
                사용해주어 감사합니다.
            </div>
        </div>
    )
}

export default LogoutComponent