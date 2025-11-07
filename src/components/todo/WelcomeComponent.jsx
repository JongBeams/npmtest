import { Link,useParams } from 'react-router-dom'
//import axios from 'axios'
import { useState } from 'react'
import {retrieveHelloWorldBean,retrieveHelloWorldPathVariable} from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

//Link 사용시 네트워크 이동은 되지않고 컴포넌트만 이동된다.(단일 페이지)
function WelcomeComponent() {

    const { username } = useParams()

    const [message,setMessage] =useState(null)

    const authContext= useAuth()

    //console.log(username);

    function callHelloWorldRestApi(){
        //console.log('called')

        //Axios를 사용하여 호출
        //npm install axios 로 터미널 설치
        // axios.get('http://localhost:8080/hello-world')
        // .then((response)=>seccessfulResponse(response))
        // .catch((error)=>errorResponse(error))
        // .finally(()=>console.log('cleanup'))

        //api 함수 분리
        // retrieveHelloWorldBean()
        // .then((response)=>seccessfulResponse(response))
        // .catch((error)=>errorResponse(error))
        // .finally(()=>console.log('cleanup'))

        retrieveHelloWorldPathVariable('JongBeom',authContext.token)
        .then((response)=>seccessfulResponse(response))
        .catch((error)=>errorResponse(error))
        .finally(()=>console.log('cleanup'))
    }

    function seccessfulResponse(response){
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)
    }
     function errorResponse(error){
        console.log(error)
    }


    return (
        <div className="Welcome">
            <h1>{username}님 환영 합니다.</h1>
            <div >
                투두리스트 관리하기 - <Link to='/todos'>투두리트스 이동</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Hello World 호출
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}


export default WelcomeComponent