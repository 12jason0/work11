import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Clock from './Clock';
// import App from './App';
// import Exam from './Exam';
// import Jsx1Exam from './Jsx1Exam';
// import Jsx2Exam from './Jsx2Exam';
// import Jsx3Exam from './Jsx3Exam';
import Jsx4Exam from './Jsx4Exam';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h1>Hello, world!</h1>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </>
// );

//Clock 렌더링
/*
setInterval(() => {
  //React Virtual DOM은 내용이 변경된 부분만 업데이트
  // 브라우저에서 전체가 아니라 "시간" 부분만 새로고침 되고 있다
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      {/* <Jsx1Exam /> */}
      {/* <Jsx2Exam /> */}
      {/* <Jsx3Exam /> */}
      <Jsx4Exam />
    </React.StrictMode>
  </>
);
{
  /* // root.render(
//   <>
//     <React.StrictMode>
//       <Exam />
//     </React.StrictMode>
//   </>
// ); */
}
{
  /* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
}

reportWebVitals();
