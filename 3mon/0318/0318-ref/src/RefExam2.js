import React, { useRef } from 'react';

export default function RefExam2() {
  const writerRef = useRef();
  const titleRef = useRef();
  const handleFocus = () => {
    if (writerRef.current.value.trim().length === 0) {
      writerRef.current.focus();
      return;
    }

    if (titleRef.current.value.trim().length === 0) {
      titleRef.current.focus();
      return;
    }

    alert(`${writerRef.current.value} : ${titleRef.current.value}`);
  };
  return (
    <>
      작성자:
      <input type="text" ref={writerRef} />
      제목:
      <input type="text" ref={titleRef} />
      <button onClick={handleFocus}>작성</button>
    </>
  );
}
