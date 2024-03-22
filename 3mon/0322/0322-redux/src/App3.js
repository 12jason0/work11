import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App2() {
  //store에 있는 상태 가져오기
  const isVisible = useSelector((state) => state.isVisible);

  return (
    <div>
      <h1>React Redux Ex</h1>
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}" 이다.</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box1</h2>
      {/* CHANGE 버튼을 클릭하면 '참', '거짓' 글자가 토글*/}
      <button onClick={() => dispatch({ type: 'CHANGE' })}>CHANGE</button>
    </div>
  );
};
