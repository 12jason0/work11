import React, { useState } from 'react';

//자주 사용하는 함수로 만듦
export default function useToggle(initValue = false) {
  // value : 토글의 상태
  // setValue : 토글 상태를 변화 시키는 setter
  const [value, setValue] = useState(initValue);

  //토글 상태 스위칭
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}
