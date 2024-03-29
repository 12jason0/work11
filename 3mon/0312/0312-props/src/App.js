import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';

function App() {
  const name = '코딩온';
  return (
    <div className="App">
      <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent name={13} time="14시">
        자식 내용
      </FunctionComponent>

      <hr />
      <ClassComponent name={name} />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">Google</Button>
    </div>
  );
}

export default App;
