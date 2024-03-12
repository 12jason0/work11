import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Codee';
  const styles = {
    color: 'blue',
    fontSize: '48px',
    backgroundColor: 'yellow',
  };
  //주석 작성
  return (
    <>
      {/* <></> : 태그 안에 아무것도 없음(프래그먼트)*/}
      <div className="App">
        {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <p>Hello World</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */}
        {/* JSX 문법 */}
        {/*1. 하나로 감사인 요소*/}
        {/*2. JavaScript 표현식 사용 가능 
            - {}로 감싸면 js 표현식 사용 가능
            - {}에서 삼항 연산자 사용 가능 (if문 안됨)
      */}
        <div>{name} 안녕?</div>
        <div>반갑다</div>
        <div>{name === 'Codee' ? 'KDT 11기예요!' : '누구세요?'}</div>
        {/*
            3. style 속성
            - 리액트에서 dom 요소에 스타일 적용 시 문자열 X => 객체 사용
            - 스타일 이름 중에 하이픈(-) camelCase로 작성해야 함        
        */}
        <div style={styles}>하이~</div>
        <div
          style={{ color: 'blue', fontSize: '48px', backgroundColor: 'pink' }}
        >
          하이하이~
        </div>{' '}
        {/*
            4. className 사용
                - class 속성이 아닌 className 속성 사용 <div className="App">

            5. 종료 태그가 없는 태그의 사용
                - 기존의 종료 태그가 없는 태그 사용하더라도 종료 태그를 작성해야 함 or self-closing
                - ex. <br>  => <br /> or <br></br>

            6. 주석
                - // : jsx 외부 주석
                - {**} : jsx 내부 주석
        */}
      </div>
      <div>부모가 없다</div>
    </>
  );
}

export default App;
