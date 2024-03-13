import { useState } from 'react';

const SayFunction = () => {
  //배열 비구조화 할당
  const [message, setMessage] = useState('welcome!');
  console.log(useState('welcome!')); // ['welcome! , f]
  //welcome! : message 변수의 초기값으로 들어감
  //usrState(초기값) : 숫자, 문자, 배열 등등 자유롭게 넣을 수 있다.
  // f : setMessage() : message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('안녕하세요~');
  };

  const onClickLeave = (e) => {
    console.log(e.target);
    setMessage('안녕히 가세요');
  };

  const alertMsg = (e, msg) => {
    console.log(e.target);
    alert(`${msg} 입니다!`);
  };

  return (
    <div>
      {/* react 에서는 괄호 없음"
        - HTML : onclick ="onclickEnter()"  => 문자열 형식으로 호출문 등록
        - JS : addEventListener('click', onClickEnter) -> 괄호 없이 함수를 바로 실행하지 않고
                클릭이 발생했을 때 함수 호출되도록
        - React : onClick =  {onClickEnter} -> 괄호 x 함수 바로 실행 x
      */}
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      {/* 함수에 인자 보내기 : 인자가 있는 함수는 익명함수로 감싸서 처리 */}
      {/* 다른 매개변수가 있으면 출동이 나기때문에  alertMsg(e, 'msg') 이렇게 적어두고 
        보낼 매개변수가 없으면 const onClickLeave = (e)  여기에다만 표현을 한다.
      */}
      <button onClick={(e) => alertMsg(e, 'msg')}>alert 출력</button>
    </div>
  );
};

export default SayFunction;
