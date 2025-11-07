import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent />
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('jongbeom')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUsernameChange(event) {
        //console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        //console.log(event.target.value);
        setPassword(event.target.value);
    }

    //하드코딩 로그인 임시 확인
    function handleSubmint() {
        if (username === 'jongbeom' && password === '1q2w3e4r') {
            console.log('success');
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        }
        else {
            console.log('failed');
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
        return null
    }

    // function LoginMessageComponent() {
    //     if (showSuccessMessage && !showErrorMessage) {
    //         return (
    //             <div className="successMessage">로그인 인증 성공</div>
    //         )
    //     }
    //     else if(!showSuccessMessage && showErrorMessage){
    //         return (
    //             <div className="errorMessage">로그인 인증 실패. 로그인 정보를 확인해주세요.</div>
    //         )
    //     }
    // }

    return (
        <div className="Login">
            {/* <LoginMessageComponent/> */}
            {showSuccessMessage && <div className="successMessage">로그인 인증 성공</div>}
            {showErrorMessage && <div className="errorMessage">로그인 인증 실패. 로그인 정보를 확인해주세요.</div>}
            <div className="LoginForm">
                <div>
                    <label>유저 명</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="button" name="login" onClick={handleSubmint}>로그인</button>
            </div>
        </div>
    )
}



// function WelcomeComponent() {
//     return (
//         <div className="Welcome">
//             Welcome Component
//         </div>
//     )
// }