import './App.css';


/*경로 지정*/
//import LearningComponent from './components/learning-examples/LearningComponent';
//import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';


function App() {
  return (
    <div className="App">
      {/* <LearningComponent/> */}
      {/* <PlayingWithProps property1="value1" property2="value2" /> */}
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
}

/* //property는 properties안에 저장되고 고정된 이름을 가진 객체 기능
//{"property1": "value1", "property2": "value2"}
function PlayingWithProps(properties){
  console.log(properties)
  console.log(properties.property1)
  console.log(properties.property2)
  return (
    <div>Props</div>
  )
} */

//property 명은 바꿀 수 있다. by
/* function PlayingWithProps({ property1, property2 }) {
  console.log(property1)
  console.log(property2)
  return (
    <div>Props</div>
  )
} */




export default App;
