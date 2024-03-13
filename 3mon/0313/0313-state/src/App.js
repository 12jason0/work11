import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import SayFunctionExam from './SayFunctionExam';
import StateNumber from './StateNumber';
import StateNumber1 from './StateNumber1';

function App() {
  const abc = () => {
    console.log('콘솔 띄우기 성공!');
  };
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <SayFunctionExam
        // text="APP 컴포넌트에서 넘겨준 text props입니다."
        valid={abc}
      ></SayFunctionExam>
      <hr />
      <StateNumber />
      <hr />
      <StateNumber1 />
    </div>
  );
}

export default App;
