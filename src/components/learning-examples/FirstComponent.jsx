/* export default 중괄호를 쓰지 않을 경우 기본으로 선택되는 import*/
export default function FirstComponent(){
  return (<div className='First Component'>
      First Component
    </div>
  );  
}


/* export 중괄호를 사용하여 import 가능*/
export function FifthComponent(){
  return (<div className='Fifth Component'>
      Fifth Component
    </div>
  );  
}