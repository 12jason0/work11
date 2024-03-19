import React from 'react';

import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, //input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체 - errors
    watch, //특정한 폼 필드의 값을 실시간으로 사용
  } = useForm();

  //handleSubmit(funcA[, funcB]) : 두 개의 함수를 받음
  // - funcA : 필수, 유효할 때 실행
  // - funcB : 선택, 유효하지 않을 때 실행

  const onValid = (data) => {
    console.log('onVaild', data);
    //api 주소 작성
  };

  const onInValid = (err) => {
    console.log('onInVaild', err);
  };
  console.log('errors', errors);
  console.log('watch', watch('username'));

  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          // name = 'username' 기능 (input의 name을 ...register('username')를 이용하여 username이라고 정해줌)
          {...register('username', {
            required: '이름을 입력해주세요.',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 2,
            },
            maxLength: {
              message: '이름은 최대 10글자 이하 작성해주세요.',
              value: 10,
            },
          })}
        />
        {/* 에러 메세지 */}
        {errors.username?.message}
        {/* ? : 있으면 결과가 나오고 없으면 실행 안됨 */}
        <br />
        <input
          type="email"
          placeholder="email (gmail)"
          {...register('email', {
            required: '이메일을 입력해 주세요.',
            //직접 만드는 것 : validate
            validate: {
              useGmail: (value) => {
                return (
                  value.includes('gmail.com') || 'gmail로만 가입 가능합니다. '
                );
              },
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input type="text" placeholder="password" {...register('password')} />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
