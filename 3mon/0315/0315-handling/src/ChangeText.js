import { useState } from 'react';

export default function ChangeText() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      {/* true -> false, false -> true */}
      <button onClick={() => setDisplay(false)}>
        {display ? '사라져라' : '보여라'}
      </button>
      {/* display가 true 일 때만 화면에 나오게 */}
      {display && <h4>안녕하세요</h4>}
    </>
  );
}
