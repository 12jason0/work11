import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Best from './Best';
import Food from './Food';

function App() {
  const name = '코딩온';
  return (
    <div className="App">
      <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent name={13} time="14시">
        자식 내용
      </FunctionComponent>
      <FunctionComponent name={[1, 2, 3]} time="14시" />
      {/* 함수형과 클래스형 컴포넌트 중복 사용 시  prop-types 하나만 뜨는 경우 발생  */}

      <hr />
      <ClassComponent name={name} />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">Google</Button>

      <hr />
      <Food></Food>

      <hr />
      <Best></Best>
    </div>
  );
}

export default App;
