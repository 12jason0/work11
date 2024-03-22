import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams.get('mode')); //null or dark\
  // / => null
  // /?mode=dark => dark
  return (
    //join()의 경우에 null은 포함하지 않음
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>Home</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
