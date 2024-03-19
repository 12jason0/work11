import './App.css';
import Practice4 from './Exam';
import RefExam1 from './RefExam1';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import Ex1 from './Ex1';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import RefExam2 from './RefExam2';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 : ref사용 1. 콜백함수 */}
      <RefSample1 />
      <hr />
      {/* 클래스형 컴포넌트 : ref사용 2. createRef() */}
      <RefSample2 />
      <hr />
      <RefExam1 />
      <hr />
      <Practice4 />
      <hr />
      <Ex1 />
      <hr />
      {/* 함수형 컴포넌트 : useRef()로 DOM요소에 접근 */}
      <RefSample3 />
      <hr />
      {/* 함수형 컴포넌트 : useRef()로 로컬변수로 이용 */}
      <RefSample4 />
      <hr />
      <RefExam2 />
    </div>
  );
}

export default App;
