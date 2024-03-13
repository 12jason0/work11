import { useState } from 'react';
function StateNumber1() {
  const [message, setMessage] = useState(0);

  const increase = () => {
    setMessage(message + 1);
  };
  const decrease = () => {
    setMessage(message - 2);
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default StateNumber1;
