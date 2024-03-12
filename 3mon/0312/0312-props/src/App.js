import './App.css';
import FunctionComponent from './FunctionComponent';

function App() {
  const name = '코딩온';
  return (
    <div className="App">
      <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent name={13} time="14시">
        자식 내용
      </FunctionComponent>
    </div>
  );
}

export default App;
