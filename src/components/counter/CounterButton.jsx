//import { useState } from 'react';
//프로퍼티 기본값
import PropTypes from 'prop-types';

import './Counter.css';

//Counter.defaultProps 가 현재버전에서 적용안되서 Counter.defaultProps
export default function CounterButton({ by = 1 ,updateCountMethod,totalCount}) {
 

    // state 구성 [0,f] [초기값, 함수]
    // const state = useState(0);

    // 직관적이게 수정
    //const [count, setCount] = useState(0);

    //console.log(by);

/*     function incrementCounterFunction() {
        // ++와 같다. 직관적이지 않다.
        // state[1](state[0]+1)
        // console.log(state)

        //직관적으로 사용 가능
        //setCount(count + by)
        updateCountMethod(by);
        //console.log('증가 클릭')
    } */

/*     function decrementCounterFunction() {
        if ((totalCount-by) > 0){
            //setCount(count - by)
            updateCountMethod(-by);
        }
            
    } */


    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton"
                    onClick={()=>updateCountMethod(by)}
                // style={buttonStyle}
                >{by} 증가</button>
                <button className="counterButton"
                    onClick={()=>updateCountMethod(-by)}
                // style={buttonStyle}
                >{by} 감소</button>
            </div>
        </div>
    )

}


//프로퍼티 자료형 타입 지정
CounterButton.propTypes = {
    by: PropTypes.number
}

//현재버전에서 적용안됨
CounterButton.defaultProps = {
    by: 1
}

