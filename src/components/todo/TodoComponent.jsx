import { useNavigate, useParams } from 'react-router-dom'
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useAuth } from './security/AuthContext'
import { useEffect, useState } from 'react'
//formik moment 라이브러리 추가하기
// npm install formik, npm install momnet 로 터미널 설치
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'

function TodoComponent() {
    //const { id } = useParams()
    //id값이 문자열이라 -1 숫자와 문자열을 비교함
    const { id: paramId } = useParams()
    const id = parseInt(paramId)

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    //const [todo,setTodo] =useState()

    const authContext = useAuth()
    const username = authContext.username

    const navigate = useNavigate();

    useEffect(
        () => retrieveTodos(), [id]
    )


    function retrieveTodos() {

        if (id !== -1) {
            retrieveTodoApi(username, id)
                .then(respone => {
                    //console.log(respone)
                    setDescription(respone.data.description)
                    setTargetDate(respone.data.targetDate)
                }
                )
                .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        //console.log(values)
        //console.log(todo)
        if (id === -1) {
            const todo = {
                username: username,
                description: values.description,
                targetDate: values.targetDate,
                done: values.false
            }
            createTodoApi(username, todo)
                .then(respone => {
                    console.log(respone)
                    navigate(`/todos`)
                })
                .catch(error => console.log(error))
        }
        else {
            const todo = {
                id: id,
                username: username,
                description: values.description,
                targetDate: values.targetDate,
                done: values.false
            }
            updateTodoApi(username, id, todo)
                .then(respone => {
                    console.log(respone)
                    navigate(`/todos`)
                })
                .catch(error => console.log(error))
        }


    }

    function validate(values) {
        let error = {
            //description: '내용 데이터 검증 필요',
            //targetDate: '목표 날짜 검증 필요'
        }

        if (values.description.length < 5) {
            error.description = '내용 5자 이상 입력 필요'
        }

        if (values.targetDate === null || values.targetDate === ''||!moment(values.targetDate).isValid()) {
            error.targetDate = '목표 날짜 입력 필요'
        }


        console.log(values)
        return error
    }


    //<Formik> jsx를 리턴하는 함수 정의
    return (
        <div className="container">
            <h1>투두리스트 상세</h1>
            <div>
                내용 : {description}
                <Formik initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />

                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />

                                <fieldset className="form-group">
                                    <label>내용</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>목표일</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className='btn btn-success m-5'>저장</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}


export default TodoComponent