import React, { useReducer } from 'react';

/*기본 구조
const initState = { value: 0 };
const reducer = (prevState, action) => {}
*/
const initState = { value: 0 };
const reducer = (prevState, action) => {
  console.log('prevState', prevState);
  console.log('action', action); //INCREMENT   -> {type : 'INCREMENT'}

  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };
    case 'DECREMENT':
      return { value: prevState.value - 1 };
    case 'RESET':
      return { value: 0 };

    default:
      break;
  }
};

export default function UseReducerEx() {
  // reducer : state를 업데이트하는 함수 (컴포넌트 밖, 다른 파일에 있어도 상관 없다.)
  // dispatch : 액션을 발생시키는 함수 (액션 : state가 어떻게 변경되어야 하는지에 대한 힌트)
  // - 실질적으로 호출하는 함수 : dispatch
  // state : 현재 상태
  // initState : 초기값 (컴포넌트 밖, 다른 파일에 있어도 상관 없다.)
  // useReducer : [state, dispatch]를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);

  //   const increment = () => dispatch('INCREMENT');
  //   const decrement = () => dispatch('DECREMENT');
  //   const reset = () => dispatch('RESET');

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
