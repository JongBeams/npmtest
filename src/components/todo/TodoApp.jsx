
//npm install react-router-dom 터미널 설치 필요
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//npm install bootstrap 터미널 설치 필요

import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

import './TodoApp.css'

function AuthenticatedRoute({children}) {
    const authContext =useAuth()
    if(authContext.isAuthenticated)
        return children
    return <Navigate to="/"/>
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                            } />
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodoComponent />
                                </AuthenticatedRoute>
                            } />

                            <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
                {/* <WelcomeComponent/> */}
            </AuthProvider>
        </div>
    )
}


