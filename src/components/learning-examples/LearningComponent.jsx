/*경로 지정*/
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
/*중괄호를 사용하여 ./components/learning-examples/FirstComponent.jsx 파일 내 FifthComponent 함수 컴포넌트 호출 */
import {FifthComponent} from './FirstComponent'
import LearingJavaScript from './LearingJavaScript'



export default function LearningComponent() {
  return (
    <>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent/>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
      <LearingJavaScript/>
    </>
  );
}
