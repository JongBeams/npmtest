import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'


import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                    <Route path='/todos' element={<ListTodoComponent />} />
                </Routes>
            </BrowserRouter>
            {/* <WelcomeComponent/> */}
            <FooterComponent />
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('jongbeom')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

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
            navigate(`/welcome/${username}`)
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
            <h1>로그인 화면</h1>
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

//Link 사용시 네트워크 이동은 되지않고 컴포넌트만 이동된다.(단일 페이지)
function WelcomeComponent() {

    const { username } = useParams()

    console.log(username);

    return (
        <div className="Welcome">
            <h1>{username}님 환영 합니다.</h1>
            <div >
                투두리스트 관리하기 - <Link to='/todos'>투두리트스 이동</Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>지정되지 않은 페이지</h1>
            <div>
                404 에러 발생.
            </div>
        </div>
    )
}

function ListTodoComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())


    const todos = [
        { id: 1, description: '강의 끝내기', done: false, targetDate: targetDate },
        { id: 2, description: '개인 프로젝트 시작하기', done: false, targetDate: targetDate },
        { id: 3, description: '팀 프로젝트 시작하기', done: false, targetDate: targetDate },
        { id: 4, description: '자소서 쓰기', done: false, targetDate: targetDate },
        { id: 5, description: '개인 프로젝트 완성', done: false, targetDate: targetDate },
        { id: 6, description: '팀 프로젝트 완성', done: false, targetDate: targetDate },
    ]

    return (
        <div className="ListTodoComponent">
            <h1>투두리스트를 만들어보자</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>내용</td>
                            <td>완료 여부</td>
                            <td>완료 예정일</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


function HeaderComponent() {
    return (
        <div className="header">
            Header <hr />
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr /> footer
        </div>
    )
}


function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>로그아웃 했습니다.</h1>
            <div>
                사용해주어 감사합니다.
            </div>
        </div>
    )
}