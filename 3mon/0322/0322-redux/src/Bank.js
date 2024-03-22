import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/bankReducer';

export default function Bank() {
  // useSelector에서 state.bank를 사용하는 것은 rootReducer 설정에 따라 정확함
  const money = useSelector((state) => state.bank);
  const [input, setInput] = useState(''); // 초기값을 빈 문자열로 설정
  const dispatch = useDispatch();

  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money}원</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(deposit(Number(input)))}>입금</button>
      <button onClick={() => dispatch(withdraw(Number(input)))}>출금</button>
    </>
  );
}
