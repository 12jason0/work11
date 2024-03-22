import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { name } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="con">
        <h3>
          학생의 이름은 <span style={{ color: 'green' }}>{name}</span> 입니다.
        </h3>
        {searchParams.get('name') && (
          <p>
            실제 이름은
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {searchParams.get('name')}
            </span>
          </p>
        )}
      </div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
}
