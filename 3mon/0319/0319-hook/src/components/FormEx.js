import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormEx() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('onVaild', data);
  };

  const onInValid = (err) => {
    console.log('onInVaild', err);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="name"
          {...register('username', {
            required: '이름은 필수 항목 입니다.',
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            // 음수 일때 data 값 안들어오고 message 띄우기
            min: { message: '0이상의 숫자만 입력 가능합니다.', value: 0 },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
