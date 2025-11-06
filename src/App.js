import { Component } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent/>
      <FourthComponent></FourthComponent>
    </div>
  );
}

function FirstComponent(){
  return (
    <div className='First Component'>
      First Component
    </div>
  );
}

function SecondComponent(){
  return (
    <div className='Second Component'>
      Second Component
    </div>
  );
}

class ThirdComponent extends Component{
    render(){
    return (
      <div className='Third Component'>
        Third Component
      </div>
    );
  }
}

class FourthComponent extends Component{
    render(){
    return (
      <div className='Fourth Component'>
        Fourth Component
      </div>
    );
  }
}



export default App;
