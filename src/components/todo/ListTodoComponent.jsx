import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveTodoForUsername } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodoComponent() {

    //const today = new Date();
    //const targetDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())

    const authContext = useAuth()
    const username = authContext.username;

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const navigate = useNavigate();


    // const todos = [
    //     { id: 1, description: '강의 끝내기', done: false, targetDate: targetDate },
    //     { id: 2, description: '개인 프로젝트 시작하기', done: false, targetDate: targetDate },
    //     { id: 3, description: '팀 프로젝트 시작하기', done: false, targetDate: targetDate },
    //     { id: 4, description: '자소서 쓰기', done: false, targetDate: targetDate },
    //     { id: 5, description: '개인 프로젝트 완성', done: false, targetDate: targetDate },
    //     { id: 6, description: '팀 프로젝트 완성', done: false, targetDate: targetDate },
    // ]

    //리액트 함수형 컴포넌트에서 “렌더 후에” 실행되는 사이드이펙트용 훅
    //데이터 요청, 이벤트 구독, 타이머, 로깅, DOM 조작처럼 렌더만으로는 못 하는 일에 사용
    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        retrieveTodoForUsername(username)
            .then(respone => {
                //console.log(respone)
                setTodos(respone.data)
            }
            )
            .catch(error => console.log(error))
    }

    // 날짜 포맷 함수 추가
    // function formatDate(date) {
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0');
    //     const day = String(date.getDate()).padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    // }

    function deleteTodo(id) {
        console.log('click' + id)
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`${id}번 투두 게시물 삭제 성공!`)
                    refreshTodos()
                }
                //삭제 메시지
                //투두리스트 상태 업데이트
            )
    }

    function updateTodo(id) {
        console.log('click' + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        //console.log('click' + id)
        navigate(`/todo/-1`)
    }
    


    return (
        <div className="container">
            <h1>투두리스트를 만들어보자</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>내용</th>
                            <th>완료 여부</th>
                            <th>완료 예정일</th>
                            <th>변경</th>
                            <th>제거</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{formatDate(todo.targetDate)}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-success"
                                            onClick={() => updateTodo(todo.id)}>변경</button></td>
                                        <td><button className="btn btn-warning"
                                            onClick={() => deleteTodo(todo.id)}>제거</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>추가</div>
        </div>
    )
}

export default ListTodoComponent