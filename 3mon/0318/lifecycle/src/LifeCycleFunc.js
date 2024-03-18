import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={changNumber}>Plus</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </div>
  );
}
