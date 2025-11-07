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

    // 날짜 포맷 함수 추가
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="container">
            <h1>투두리스트를 만들어보자</h1>
            <div>
                <table className="table">
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
                                        <td>{formatDate(todo.targetDate)}</td>
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

export default ListTodoComponent