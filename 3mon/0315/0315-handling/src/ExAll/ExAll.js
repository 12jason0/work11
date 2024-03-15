import { useState } from 'react';
import Select from './Select';
import Result from './Result';
import Input from './Input';

export default function Exall() {
  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });

  return (
    <>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </>
  );
}
