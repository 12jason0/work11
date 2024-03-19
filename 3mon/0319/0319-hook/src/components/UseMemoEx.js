import React, { useState, useMemo } from 'react';

// useMemo
// - 메모이제이션으로 수행한 연산값을 기억함으로써 불필요한 연산 최소화
// 부하가 걸리는 함수의 결과값을 메모리에 저장한 뒤, 리렌더링이 될 때 그 결과값만 가져와서 재사용함

export default function UseMemoEx() {
  //컴포넌트 리렌더링을 하면 함수를 다시 호출 하기 때문에 함수 내부의 모든 변수 초기화
  //리렌더링 될때마다 매번 함수를 호출해서 실행
  //  : 이처럼 불편한 점을 해결하기 위해 useMemo() 사용
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //임의의 큰 연산을 하는 함수
  //버튼을 누를 때에도, input 입력할 때에도 연산이 이뤄짐 ( calc 함수 호출)
  // useMemo 랜더링 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화
  //[before]
  //   const calc = () => {
  //     console.log('열심히 계산 중 ...');
  //     for (let i = 0; i < 10000000; i++) {}
  //     return count ** 2;
  //   };

  //[after]
  // count 의 값이 바뀔 때만 함수를 실행
  // input 상태가 바뀌면 컴포넌트는 리렌더링, 이때 calc 연산되지 않게
  const calc = useMemo(() => {
    console.log('열심히 계산 중 ...');
    for (let i = 0; i < 10000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemoEx</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>count : {count}</div>

      {/* before 
      <div>calc : {calc()}</div> */}

      {/* after  */}
      <div>calc : {calc}</div>
    </div>
  );
}
