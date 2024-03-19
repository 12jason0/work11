import React, { useEffect } from 'react';

export default function LifeCycleFuncChild({ number }) {
  //mount 시점에 실행
  //의존 배열에 빈 값을 넣어줌 (화면에 처음 나올 때 실행)
  useEffect(() => {
    console.log('컴포넌트 마운트!!!');
  }, []);

  //Unmount 시점에 실행
  useEffect(() => {
    //빈 배열이기 때문에  console.log('컴포넌트 언마운트 코드 전');는 Mount 시점에서 실행이 됨
    console.log('컴포넌트 언마운트 코드 전');
    return () => {
      //return 안에 있는 값만 Unmount 시점에 실행
      console.log('컴포넌트 언마운트!!!');
    };
  }, []);

  //Update 시점에 실행 & 마운트 시에도 실행
  useEffect(() => {
    console.log('number', number);
  }, [number]);

  return <div>현재 Number 값은 {number}입니다</div>;
}
