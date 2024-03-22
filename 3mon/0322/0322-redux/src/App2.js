import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './store/counterReducer';

export default function App2() {
  //store에 있는 상태 가져오기
  const number = useSelector((state) => state.counter.number);
  console.log(useSelector((state) => state.counter.number));
  return (
    <div>
      <h1>React Redux Ex</h1>
      <h2>number : {number}</h2>
      <Box1 />
    </div>
  );
}
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box4</h2>
      <button onClick={() => dispatch(plus())}>PLUS</button>
      <button onClick={() => dispatch(minus())}>MINUS</button>
    </div>
  );
};
