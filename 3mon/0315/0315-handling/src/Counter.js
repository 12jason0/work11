import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg}~현재 숫자는 ${number}`);
  };
  const alertMsg2 = (e, msg) => {
    alert(`${msg}~현재 숫자는 ${number}`);
    console.log(e);
  };

  const handleEvent = (e) => {
    console.log('e.target', e.target);
    /*
    target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 즉 내가 클릭한 자식 요소

     * <span>handle Event</span>
     */
    console.log('e.currentTarget', e.currentTarget);
    /*
    currentTarget : 이벤트 핸들러가 있는 요소 (button에다가 e를 해놔서 button도 나옴)

     * <button>
          <span>handle Event</span>
      </button>
     */
  };

  return (
    <div>
      <h1>Function Component Event</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없는 경우 - 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>

      {/* 함수에 인자가 있는 경우 - 익명함수로 감싸서 처리 */}
      <button onClick={() => alertMsg('hello')}>alert 출력</button>
      <button onClick={(e) => alertMsg2(e, 'hello')}>alert2 출력</button>

      {/* 추가 ) e.target vs e.currentTarget */}
      <button onClick={handleEvent}>
        <span>handle Event</span>
      </button>
    </div>
  );
}
