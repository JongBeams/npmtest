import { useState } from 'react';

import CounterButton from './CounterButton';

import './Counter.css';

export default function Counter() {


    const [totalCount, setTotalCount] = useState(0);

    function updateCounterParentFunction(by){
        if(totalCount+by>=0)
            setTotalCount(totalCount + by)
    }

    function resetCounter(){
        setTotalCount(0)
    }
 

    return (
        <>
        <div>총합값</div>
        <span className="totalCount">{totalCount}</span>
            <CounterButton by={1} updateCountMethod={updateCounterParentFunction} totalCount={totalCount} />
            <CounterButton by={2} updateCountMethod={updateCounterParentFunction} totalCount={totalCount} />
            <CounterButton by={5} updateCountMethod={updateCounterParentFunction} totalCount={totalCount} />
            <button className="resetButton"onClick={resetCounter}>초기화</button>
        </>
    )

}

