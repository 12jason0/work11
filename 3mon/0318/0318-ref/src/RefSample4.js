import React, { useRef, useState } from 'react';

export default function RefSample4() {
  //console.log에서는 증가가 되는중 화면에 표시만 안됨 (Rerendering이 안되는거임)
  //Rerendering 일어나면 변수의 값이 바뀌면 안되는 변수의 사용
  // 단) 새로고침을 누르면 원래 변수의 값으로 돌아감
  const idRef = useRef(1);
  const [id, setId] = useState(10);
  //일반 변수 : Rerendering이 일어나면 변수 값은 초기화
  let idVar = 20;
  const plusIdRef = () => {
    idRef.current += 1;
    console.log('id', idRef.current);
  };
  const plusIdState = () => {
    //Rerendering을 할 때 보여줌
    setId(id + 1);
  };
  return (
    <div>
      <h1>Ref Sample - 로컬 변수</h1>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus Ref</button>

      <h2>{id}</h2>
      <button onClick={plusIdState}>plus State</button>

      <h2>{idVar}</h2>
      <button
        onClick={() => {
          idVar += 1;
          console.log(idVar);
        }}
      >
        plus 일반 변수
      </button>
    </div>
  );
}
