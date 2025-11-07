import { Link,useParams } from 'react-router-dom'


//Link 사용시 네트워크 이동은 되지않고 컴포넌트만 이동된다.(단일 페이지)
function WelcomeComponent() {

    const { username } = useParams()

    //console.log(username);

    return (
        <div className="Welcome">
            <h1>{username}님 환영 합니다.</h1>
            <div >
                투두리스트 관리하기 - <Link to='/todos'>투두리트스 이동</Link>
            </div>
        </div>
    )
}


export default WelcomeComponent