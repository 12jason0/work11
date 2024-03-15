import { useState } from 'react';

export default function ChangeMsg() {
  const [Color, setColor] = useState({ color: 'black' });
  const [text, setText] = useState('검정색 글씨');

  const ChangeBlue = () => {
    setColor({ color: 'blue' });
    setText('파란색 글씨');
  };
  const ChangeRed = () => {
    setColor({ color: 'red' });
    setText('빨간색 글씨');
  };

  return (
    <div>
      <h1 style={Color}>{text}</h1>
      <button onClick={ChangeRed}>빨간색</button>
      <button onClick={ChangeBlue}>파란색</button>
    </div>
  );
}
